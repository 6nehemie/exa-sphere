package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.auth.AuthenticationResponseDto;
import _6nehemie.com.server.dto.auth.LoginDto;
import _6nehemie.com.server.dto.auth.RegisterDto;
import _6nehemie.com.server.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    //? register
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDto> register(@RequestBody RegisterDto request) {
        return ResponseEntity.ok(authService.register(request));
    }
    
    //? login
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDto> login(@RequestBody LoginDto request) {
        return ResponseEntity.ok(authService.login(request));
    }
}
