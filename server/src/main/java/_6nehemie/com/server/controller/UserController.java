package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.ResponseDto;
import _6nehemie.com.server.dto.address.AddressResponseDto;
import _6nehemie.com.server.dto.avatar.UpdateAvatarResponseDto;
import _6nehemie.com.server.dto.user.*;
import _6nehemie.com.server.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @DeleteMapping
    public ResponseEntity<ResponseDto> deleteUser(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(userService.deleteUser(userDetails));
    }

    @PutMapping("/avatar")
    public ResponseEntity<UpdateAvatarResponseDto> updateAvatar(@AuthenticationPrincipal UserDetails userDetails, @RequestParam("avatar") MultipartFile avatar) {

        return ResponseEntity.ok(userService.updateAvatar(userDetails, avatar));
    }

    @DeleteMapping("/avatar")
    public ResponseEntity<UpdateAvatarResponseDto> deleteAvatar(@AuthenticationPrincipal UserDetails userDetails) {

        return ResponseEntity.ok(userService.deleteAvatar(userDetails));
    }

    @PutMapping("/name")
    public ResponseEntity<FullNameResponseDto> updateFullName(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdateNameDto request
    ) {
        return ResponseEntity.ok(userService.updateName(userDetails, request));
    }
    
    @PutMapping("/description")
    public ResponseEntity<DescriptionResponseDto> updateDescription(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody UpdateDescription request
    ) {
        return ResponseEntity.ok(userService.updateDescription(userDetails, request));
    }
    
    @PutMapping("/email")
    public ResponseEntity<EmailResponseDto> updateEmail(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdateEmailDto request
    ) {
        return ResponseEntity.ok(userService.updateEmail(userDetails, request));
    }
    
    @PutMapping("/password")
    public ResponseEntity<PasswordResponseDto> updatePassword(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdatePasswordDto request
    ) {
        return ResponseEntity.ok(userService.updatePassword(userDetails, request));
    }
    
    @PutMapping("/address")
    public ResponseEntity<AddressResponseDto> updateAddress(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdateAddressDto request
    ) {
        return ResponseEntity.ok(userService.updateAddress(userDetails, request));
    }
    
    @DeleteMapping("/address")
    public ResponseEntity<AddressResponseDto> deleteAddress(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(userService.deleteAddress(userDetails));
    }

}
