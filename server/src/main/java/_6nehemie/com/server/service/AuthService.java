package _6nehemie.com.server.service;


import _6nehemie.com.server.dto.auth.AuthenticationResponseDto;
import _6nehemie.com.server.dto.auth.LoginDto;
import _6nehemie.com.server.dto.auth.RegisterDto;
import _6nehemie.com.server.dto.auth.UserAuthResponseDto;
import _6nehemie.com.server.enums.Role;
import _6nehemie.com.server.exception.BadRequestException;
import _6nehemie.com.server.exception.NotFoundException;
import _6nehemie.com.server.model.Token;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.TokenRepository;
import _6nehemie.com.server.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final TokenRepository tokenRepository;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager, TokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
    }

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

        user = userRepository.save(user);

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

    private void revokeAllTokens(User user) {
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
}
