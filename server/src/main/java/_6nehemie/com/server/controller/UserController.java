package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.user.GetUserResponseDto;
import _6nehemie.com.server.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<GetUserResponseDto> getUser(@AuthenticationPrincipal UserDetails userDetails) {

        return ResponseEntity.ok(userService.getUser(userDetails));
    }
    
}
