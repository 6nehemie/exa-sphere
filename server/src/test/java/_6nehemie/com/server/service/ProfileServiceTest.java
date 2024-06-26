package _6nehemie.com.server.service;

import _6nehemie.com.server.dto.profile.GetProfilesResponseDto;
import _6nehemie.com.server.dto.profile.PostProfileDto;
import _6nehemie.com.server.dto.profile.ProfileResponseDto;
import _6nehemie.com.server.dto.profile.UpdateProfileDto;
import _6nehemie.com.server.model.Profile;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.ExperienceRepository;
import _6nehemie.com.server.repository.ProfileRepository;
import _6nehemie.com.server.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.Optional;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProfileServiceTest {

    private ProfileService profileService;
    private ProfileRepository profileRepository;
    private UserRepository userRepository;
    private ExperienceRepository experienceRepository;
    private UserDetails userDetails;

    @BeforeEach
    void setUp() {
        profileRepository = Mockito.mock(ProfileRepository.class);
        userRepository = Mockito.mock(UserRepository.class);
        experienceRepository = Mockito.mock(ExperienceRepository.class);
        userDetails = Mockito.mock(UserDetails.class);
        profileService = new ProfileService(profileRepository, userRepository, experienceRepository);
    }

    
    @Test
    public void testCreateProfile() {
        // Setup
        when(userDetails.getUsername()).thenReturn("user1");
        when(userRepository.findByUsername("user1")).thenReturn(Optional.of(new User()));
        when(profileRepository.findByUser_Username("user1")).thenReturn(List.of());

        PostProfileDto request = new PostProfileDto(
                "Profile Title", "Profile Description", "Skills", "Characteristics", List.of()
        );

        // Act
        GetProfilesResponseDto response = profileService.createProfile(userDetails, request);

        // Assert
        assertNotNull(response);
        verify(profileRepository, times(1)).save(any(Profile.class));
        verify(experienceRepository, times(1)).saveAll(any());
    }

    @Test
    public void testGetProfiles() {
        // Setup
        when(userDetails.getUsername()).thenReturn("user1");
        when(profileRepository.findByUser_Username("user1")).thenReturn(List.of(
                new Profile(), new Profile()
        ));

        // Act
        List<GetProfilesResponseDto> profiles = profileService.getProfiles(userDetails);

        // Assert
        assertNotNull(profiles);
        assertEquals(2, profiles.size());
    }

    @Test
    public void testUpdateProfile() {
        // Setup
        Profile existingProfile = new Profile();
        existingProfile.setId(1L);
        when(userDetails.getUsername()).thenReturn("user1");
        when(profileRepository.findByIdAndUser_Username(1L, "user1")).thenReturn(Optional.of(existingProfile));

        UpdateProfileDto request = new UpdateProfileDto(
                1L, "Updated Title", "Updated Description", "Updated Skills", "Updated Characteristics", List.of()
        );

        // Act
        ProfileResponseDto response = profileService.updateProfile(userDetails, request);

        // Assert
        assertNotNull(response);
        assertEquals("Profile updated successfully", response.message());
        verify(profileRepository, times(1)).save(existingProfile);
        verify(experienceRepository, times(1)).saveAll(any());
    }
}