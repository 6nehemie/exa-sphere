package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.auth.AuthenticationResponseDto;
import _6nehemie.com.server.dto.auth.LoginDto;
import _6nehemie.com.server.dto.auth.RegisterDto;
import _6nehemie.com.server.service.AuthService;
import _6nehemie.com.server.service.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    private final EmailService emailService;

    public AuthController(AuthService authService, EmailService emailService) {
        this.authService = authService;
        this.emailService = emailService;
    }

    //? register
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDto> register(@Validated @RequestBody RegisterDto request) {
        return ResponseEntity.ok(authService.register(request));
    }

    //? login
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDto> login(@Validated @RequestBody LoginDto request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @GetMapping("/test")
    public String test() {
        emailService.sendEmail(
                "nehemie.mbg@gmail.com",
                "Test Email",
                "This is a test email from Exa Sphere Backend Server!"
        );
        return "Welcome to Exa Sphere Backend Server!";
    }
}


