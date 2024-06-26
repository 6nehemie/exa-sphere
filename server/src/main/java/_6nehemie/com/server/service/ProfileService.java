package _6nehemie.com.server.service;

import _6nehemie.com.server.dto.experience.ExperienceResponseDto;
import _6nehemie.com.server.dto.profile.GetProfilesResponseDto;
import _6nehemie.com.server.dto.profile.PostProfileDto;
import _6nehemie.com.server.dto.profile.ProfileResponseDto;
import _6nehemie.com.server.dto.profile.UpdateProfileDto;
import _6nehemie.com.server.exception.BadRequestException;
import _6nehemie.com.server.model.Experience;
import _6nehemie.com.server.model.Profile;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.ExperienceRepository;
import _6nehemie.com.server.repository.ProfileRepository;
import _6nehemie.com.server.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final UserRepository userRepository;
    private final ExperienceRepository experienceRepository;

    public ProfileService(ProfileRepository profileRepository, UserRepository userRepository, ExperienceRepository experienceRepository) {
        this.profileRepository = profileRepository;
        this.userRepository = userRepository;
        this.experienceRepository = experienceRepository;
    }

    /**
     * Create a new profile for the user
     * @param userDetails - the user details of the authenticated user
     * @param request - the post profile request object
     * @return - the get profiles response
     */
    public GetProfilesResponseDto createProfile(UserDetails userDetails, PostProfileDto request) {
        // Fetch user
        User user = getUser(userDetails);

        // Fetch user profiles
        List<Profile> profiles = profileRepository.findByUser_Username(userDetails.getUsername());

        // can create up to 5 profiles
        if (profiles.size() >= 5) {
            throw new BadRequestException("You can only create up to 5 profiles");
        }
        
        // Create new profile
        Profile profile = new Profile();
        
        // Map experiences from request to list of Experience
        List<Experience> experiences = request.experiences().stream().map(experience -> {
            Experience newExperience = new Experience();
            newExperience.setJobTitle(experience.jobTitle());
            newExperience.setCompany(experience.company());
            newExperience.setLocation(experience.location());
            newExperience.setResponsibilities(experience.responsibilities());
            newExperience.setAchievements(experience.achievements());
            newExperience.setStartDate(experience.startDate());
            newExperience.setEndDate(experience.endDate());
            newExperience.setProfile(profile);
            return newExperience;
        }).toList();

        // Set profile fields
        profile.setTitle(request.title());
        profile.setDescription(request.description());
        profile.setSkills(request.skills());
        profile.setCharacteristics(request.characteristics());
        profile.setExperiences(experiences);
        profile.setUser(user);

        // Save profile and experiences 
        profileRepository.save(profile);
        experienceRepository.saveAll(experiences);

        // Return GetProfilesResponseDto
        return new GetProfilesResponseDto(
                profile.getId(),
                profile.getCharacteristics(),
                profile.getDescription(),
                profile.getSkills(),
                profile.getTitle(),
                profile.getExperiences().stream().map(
                        experience -> new ExperienceResponseDto(
                                experience.getId(),
                                experience.getJobTitle(),
                                experience.getCompany(),
                                experience.getLocation(),
                                experience.getResponsibilities(),
                                experience.getAchievements(),
                                experience.getStartDate(),
                                experience.getEndDate()
                        )
                ).toList()
        );
    }

    /**
     * Get all profiles of the user
     * @param userDetails - the user details of the authenticated user
     * @return - the list of get profiles response
     */
    public List<GetProfilesResponseDto> getProfiles(UserDetails userDetails) {
        List<Profile> profiles = profileRepository.findByUser_Username(userDetails.getUsername());
        
        // converts profiles to list of GetProfilesResponseDto
        return profiles.stream()
                .map(profile -> new GetProfilesResponseDto(
                        profile.getId(),
                        profile.getCharacteristics(),
                        profile.getDescription(),
                        profile.getSkills(),
                        profile.getTitle(),
                        profile.getExperiences().stream()
                                .map(experience -> new ExperienceResponseDto(
                                        experience.getId(),
                                        experience.getJobTitle(),
                                        experience.getCompany(),
                                        experience.getLocation(),
                                        experience.getResponsibilities(),
                                        experience.getAchievements(),
                                        experience.getStartDate(),
                                        experience.getEndDate()
                                ))
                                .toList()
                ))
                .toList();
    }

    /**
     * Get a profile by id
     * @param userDetails - the user details of the authenticated user
     * @param id - the id of the profile
     * @return - the get profiles response
     */
    public GetProfilesResponseDto getProfile(UserDetails userDetails, Long id) {
        Profile profile = profileRepository.findByIdAndUser_Username(id, userDetails.getUsername())
                .orElseThrow(() -> new BadRequestException("Profile not found"));
        
        return new GetProfilesResponseDto(
                profile.getId(),
                profile.getCharacteristics(),
                profile.getDescription(),
                profile.getSkills(),
                profile.getTitle(),
                profile.getExperiences().stream()
                        .map(experience -> new ExperienceResponseDto(
                                experience.getId(),
                                experience.getJobTitle(),
                                experience.getCompany(),
                                experience.getLocation(),
                                experience.getResponsibilities(),
                                experience.getAchievements(),
                                experience.getStartDate(),
                                experience.getEndDate()
                        ))
                        .toList()
        );
    }

    /**
     * Update a profile
     * @param userDetails - the user details of the authenticated user
     * @param request - the update profile request object
     * @return - the profile response
     */
    @Transactional
    public ProfileResponseDto updateProfile(UserDetails userDetails, UpdateProfileDto request) {
        Profile profile = profileRepository.findByIdAndUser_Username(request.id(), userDetails.getUsername())
                .orElseThrow(() -> new BadRequestException("Profile not found"));
        
        profile.setTitle(request.title());
        profile.setDescription(request.description());
        profile.setSkills(request.skills());
        profile.setCharacteristics(request.characteristics());
        
        experienceRepository.deleteAllByProfile_Id(profile.getId());

        List<Experience> experiences = request.experiences().stream().map(experience -> {
            Experience newExperience = new Experience();
            newExperience.setJobTitle(experience.jobTitle());
            newExperience.setCompany(experience.company());
            newExperience.setLocation(experience.location());
            newExperience.setResponsibilities(experience.responsibilities());
            newExperience.setAchievements(experience.achievements());
            newExperience.setStartDate(experience.startDate());
            newExperience.setEndDate(experience.endDate());
            newExperience.setProfile(profile);
            return newExperience;
        }).toList();
        
        profileRepository.save(profile);
        experienceRepository.saveAll(experiences);
        
        return new ProfileResponseDto(
                "Profile updated successfully",
                HttpStatus.OK.value()
        );
    }

    /**
     * Delete a profile
     * @param userDetails - the user details of the authenticated user
     * @param id - the id of the profile
     * @return - the profile response
     */
    @Transactional
    public ProfileResponseDto deleteProfile(UserDetails userDetails, Long id) {
        if (!profileRepository.existsByIdAndUser_Username(id, userDetails.getUsername())) {
            throw new BadRequestException("Profile not found");
        }
        
        profileRepository.deleteByIdAndUser_Username(id, userDetails.getUsername());
        
        return new ProfileResponseDto(
                "Profile deleted successfully",
                HttpStatus.OK.value()
        );
    }

    /**
     * Get user by user details
     * @param userDetails - the user details of the authenticated user
     * @return - the user object
     */
    private User getUser(UserDetails userDetails) {
        return userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new BadRequestException("User not found"));
    }
}
