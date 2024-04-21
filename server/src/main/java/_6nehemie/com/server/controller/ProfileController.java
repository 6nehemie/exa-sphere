package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.profile.GetProfilesResponseDto;
import _6nehemie.com.server.dto.profile.PostProfileDto;
import _6nehemie.com.server.dto.profile.ProfileResponseDto;
import _6nehemie.com.server.dto.profile.UpdateProfileDto;
import _6nehemie.com.server.service.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profiles")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    // post mapping to create a new profile
    @PostMapping
    public ResponseEntity<GetProfilesResponseDto> createProfile(
            @AuthenticationPrincipal UserDetails userDetails, @RequestBody PostProfileDto request
    ) {

        return ResponseEntity.ok(profileService.createProfile(userDetails, request));
    }
    
    // get mapping to get a list of profile
    @GetMapping
    public ResponseEntity<List<GetProfilesResponseDto>> getProfiles(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(profileService.getProfiles(userDetails));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<GetProfilesResponseDto> getProfile(@AuthenticationPrincipal UserDetails userDetails, @PathVariable Long id) {
        return ResponseEntity.ok(profileService.getProfile(userDetails, id));
    }
    
    // update mapping to update a profile
    @PutMapping
    public ResponseEntity<ProfileResponseDto> updateProfile(
            @AuthenticationPrincipal UserDetails userDetails,  @RequestBody UpdateProfileDto request
    ) {
        return ResponseEntity.ok(profileService.updateProfile(userDetails, request));
    }
    
    // delete mapping to delete a profile
    @DeleteMapping("/{id}")
    public ResponseEntity<ProfileResponseDto> deleteProfile(@AuthenticationPrincipal UserDetails userDetails, @PathVariable Long id) {
        return ResponseEntity.ok(profileService.deleteProfile(userDetails, id));
    }
}
