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

import java.util.ArrayList;
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

    public GetProfilesResponseDto createProfile(UserDetails userDetails, PostProfileDto request) {
        // can create up to 5 profiles
        User user = getUser(userDetails);

        List<Profile> profiles = profileRepository.findByUser_Username(userDetails.getUsername());

        if (profiles.size() >= 5) {
            throw new BadRequestException("You can only create up to 5 profiles");
        }

        Profile profile = new Profile();
        
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

        profile.setTitle(request.title());
        profile.setDescription(request.description());
        profile.setSkills(request.skills());
        profile.setCharacteristics(request.characteristics());
        profile.setExperiences(experiences);
        profile.setUser(user);


        profileRepository.save(profile);
        experienceRepository.saveAll(experiences);

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


    private User getUser(UserDetails userDetails) {
        return userRepository.findByUsername(userDetails.getUsername())
                .orElseThrow(() -> new BadRequestException("User not found"));
    }
}
