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

    /**
     * Retrieves the details of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @return A GetUserResponseDto object containing the user's details.
     */
    @GetMapping
    public ResponseEntity<GetUserResponseDto> getUser(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(userService.getUser(userDetails));
    }

    /**
     * Deletes the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @return A ResponseDto object containing the result of the operation.
     */
    @DeleteMapping
    public ResponseEntity<ResponseDto> deleteUser(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(userService.deleteUser(userDetails));
    }

    /**
     * Updates the avatar of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @param avatar      The new avatar.
     * @return UpdateAvatarResponseDto
     */
    @PutMapping("/avatar")
    public ResponseEntity<UpdateAvatarResponseDto> updateAvatar(@AuthenticationPrincipal UserDetails userDetails, @RequestParam("avatar") MultipartFile avatar) {

        return ResponseEntity.ok(userService.updateAvatar(userDetails, avatar));
    }

    /**
     * Deletes the avatar of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @return UpdateAvatarResponseDto
     */
    @DeleteMapping("/avatar")
    public ResponseEntity<UpdateAvatarResponseDto> deleteAvatar(@AuthenticationPrincipal UserDetails userDetails) {

        return ResponseEntity.ok(userService.deleteAvatar(userDetails));
    }

    /**
     * Updates the full name of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @param request     The new full name.
     * @return FullNameResponseDto
     */
    @PutMapping("/name")
    public ResponseEntity<FullNameResponseDto> updateFullName(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdateNameDto request
    ) {
        return ResponseEntity.ok(userService.updateName(userDetails, request));
    }

    /**
     * Updates the description of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @param request     The new description.
     * @return DescriptionResponseDto
     */
    @PutMapping("/description")
    public ResponseEntity<DescriptionResponseDto> updateDescription(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody UpdateDescription request
    ) {
        return ResponseEntity.ok(userService.updateDescription(userDetails, request));
    }

    /**
     * Updates the email of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @param request     The new email.
     * @return EmailResponseDto
     */
    @PutMapping("/email")
    public ResponseEntity<EmailResponseDto> updateEmail(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdateEmailDto request
    ) {
        return ResponseEntity.ok(userService.updateEmail(userDetails, request));
    }

    /**
     * Updates the password of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @param request     The new password.
     * @return PasswordResponseDto
     */
    @PutMapping("/password")
    public ResponseEntity<PasswordResponseDto> updatePassword(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdatePasswordDto request
    ) {
        return ResponseEntity.ok(userService.updatePassword(userDetails, request));
    }

    /**
     * Updates the address of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @param request     The new address.
     * @return AddressResponseDto
     */
    @PutMapping("/address")
    public ResponseEntity<AddressResponseDto> updateAddress(
            @AuthenticationPrincipal UserDetails userDetails,
            @Validated @RequestBody UpdateAddressDto request
    ) {
        return ResponseEntity.ok(userService.updateAddress(userDetails, request));
    }

    /**
     * Deletes the address of the authenticated user.
     *
     * @param userDetails The details of the authenticated user.
     * @return AddressResponseDto
     */
    @DeleteMapping("/address")
    public ResponseEntity<AddressResponseDto> deleteAddress(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(userService.deleteAddress(userDetails));
    }

}
