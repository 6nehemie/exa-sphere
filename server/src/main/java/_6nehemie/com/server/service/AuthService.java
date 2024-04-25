package _6nehemie.com.server.service;


import _6nehemie.com.server.dto.auth.*;
import _6nehemie.com.server.enums.Registration;
import _6nehemie.com.server.enums.Role;
import _6nehemie.com.server.exception.BadRequestException;
import _6nehemie.com.server.exception.NotFoundException;
import _6nehemie.com.server.model.Token;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.TokenRepository;
import _6nehemie.com.server.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;
    private final EmailService emailService;
    private final CodeGeneratorService codeGeneratorService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager, TokenRepository tokenRepository, EmailService emailService, CodeGeneratorService codeGeneratorService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
        this.emailService = emailService;
        this.codeGeneratorService = codeGeneratorService;
    }

    @Transactional
    public AuthenticationResponseDto register(RegisterDto request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new BadRequestException("Email already exists");
        }

        User user = new User();
        user.setFirstName(request.firstName());
        user.setLastName(request.lastName());
        user.setEmail(request.email());
        user.setUsername(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRole(Role.USER);
        user.setAuthType(Registration.CREDENTIALS);

        user.setVerificationCode(codeGeneratorService.generateSixDigitCode());

        user = userRepository.save(user);

        //? Send verification code to user
        emailService.sendEmail(
                user.getEmail(),
                "Verification Code",
                "Your verification code is: " + user.getVerificationCode()
        );

        String token = jwtService.generateToken(user);
        Date expiresIn = jwtService.extractExpiration(token);

        // save token to database
        saveUserToken(token, user);

        return new AuthenticationResponseDto(
                user.getId(),
                token,
                expiresIn,
                new UserAuthResponseDto(
                        user.getId(),
                        user.getFirstName(),
                        user.getLastName(),
                        user.getUsername(),
                        user.getEmail()
                )
        );
    }


    public AuthenticationResponseDto login(LoginDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.username(), request.password())
        );

        User user = userRepository.findByUsername(request.username()).orElseThrow(
                () -> new NotFoundException("User not found")
        );

        String token = jwtService.generateToken(user);
        Date expiresIn = jwtService.extractExpiration(token);

        revokeAllTokens(user);

        saveUserToken(token, user);

        return new AuthenticationResponseDto(
                user.getId(),
                token,
                expiresIn,
                new UserAuthResponseDto(
                        user.getId(),
                        user.getFirstName(),
                        user.getLastName(),
                        user.getUsername(),
                        user.getEmail()
                )
        );
    }

    public void revokeAllTokens(User user) {
        List<Token> validTokens = tokenRepository.findAllByUser_Id(user.getId());

        if (!validTokens.isEmpty()) {
            validTokens.forEach(tokenEntity -> {
                tokenEntity.setValid(false);
            });
        }

        tokenRepository.saveAll(validTokens);
    }

    private void saveUserToken(String token, User user) {
        Token tokenEntity = new Token();
        tokenEntity.setToken(token);
        tokenEntity.setValid(true);
        tokenEntity.setUser(user);
        tokenRepository.save(tokenEntity);
    }

    public AuthenticationResponseDto oAuth(OAuthDto request) {
        //? Check if provider is google
        if (!"google".equals(request.provider().provider())
                || !"https://accounts.google.com".equals(request.provider().issuedUrl())
                || !"oauth".equals(request.provider().type())
        ) {
            throw new BadRequestException("Invalid provider");
        }

        Optional<User> optionalUser = userRepository.findByUsername(request.email());

        if (optionalUser.isPresent() && optionalUser.get().getAuthType().equals(Registration.CREDENTIALS)) {
            throw new BadRequestException("Account created using credentials");
        }

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();

            String token = jwtService.generateToken(user);
            Date expiresIn = jwtService.extractExpiration(token);

            revokeAllTokens(user);
            saveUserToken(token, user);

            return new AuthenticationResponseDto(
                    user.getId(),
                    token,
                    expiresIn,
                    new UserAuthResponseDto(
                            user.getId(),
                            user.getFirstName(),
                            user.getLastName(),
                            user.getUsername(),
                            user.getEmail()
                    )
            );
        } else {
            User user = new User();
            user.setFirstName(request.firstName());
            user.setLastName(request.lastName());
            user.setEmail(request.email());
            user.setUsername(request.email());
            user.setAvatar(request.avatar());
            user.setRole(Role.USER);
            user.setAuthType(Registration.OAUTH);

            user.setVerificationCode(codeGeneratorService.generateSixDigitCode());

            user = userRepository.save(user);

            //? Send verification code to user
//            emailService.sendEmail(
//                    user.getEmail(),
//                    "Verification Code",
//                    "Your verification code is: " + user.getVerificationCode()
//            );

            String token = jwtService.generateToken(user);
            Date expiresIn = jwtService.extractExpiration(token);

            // save token to database
            saveUserToken(token, user);

            return new AuthenticationResponseDto(
                    user.getId(),
                    token,
                    expiresIn,
                    new UserAuthResponseDto(
                            user.getId(),
                            user.getFirstName(),
                            user.getLastName(),
                            user.getUsername(),
                            user.getEmail()
                    )
            );
        }
    }
}
