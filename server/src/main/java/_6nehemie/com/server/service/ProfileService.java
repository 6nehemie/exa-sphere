package _6nehemie.com.server.service;

import _6nehemie.com.server.dto.profile.GetProfilesResponseDto;
import _6nehemie.com.server.dto.profile.PostProfileDto;
import _6nehemie.com.server.dto.profile.ProfileResponseDto;
import _6nehemie.com.server.dto.profile.UpdateProfileDto;
import _6nehemie.com.server.exception.BadRequestException;
import _6nehemie.com.server.model.Experience;
import _6nehemie.com.server.model.Profile;
import _6nehemie.com.server.model.User;
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

    public ProfileService(ProfileRepository profileRepository, UserRepository userRepository) {
        this.profileRepository = profileRepository;
        this.userRepository = userRepository;
    }

    public GetProfilesResponseDto createProfile(UserDetails userDetails, PostProfileDto request) {
        // can create up to 5 profiles
        User user = getUser(userDetails);

        List<Profile> profiles = profileRepository.findByUser_Username(userDetails.getUsername());

        if (profiles.size() >= 5) {
            throw new BadRequestException("You can only create up to 5 profiles");
        }

        Profile profile = new Profile();
        Experience experience1 = new Experience();
        Experience experience2 = new Experience();
        Experience experience3 = new Experience();

        profile.setTitle(request.title());
        profile.setDescription(request.description());
        profile.setSkills(request.skills());
        profile.setCharacteristics(request.characteristics());
        profile.setUser(user);

        experience1.setJobTitle(request.experience1().getJobTitle());
        experience1.setCompany(request.experience1().getCompany());
        experience1.setLocation(request.experience1().getLocation());
        experience1.setResponsibilities(request.experience1().getResponsibilities());
        experience1.setAchievements(request.experience1().getAchievements());
        experience1.setStartDate(request.experience1().getStartDate());
        experience1.setEndDate(request.experience1().getEndDate());

        profile.setExperience1(experience1);

        if (request.experience2() != null && !request.experience2().getJobTitle().isEmpty()) {
            experience2.setJobTitle(request.experience2().getJobTitle());
            experience2.setCompany(request.experience2().getCompany());
            experience2.setLocation(request.experience2().getLocation());
            experience2.setResponsibilities(request.experience2().getResponsibilities());
            experience2.setAchievements(request.experience2().getAchievements());
            experience2.setStartDate(request.experience2().getStartDate());
            experience2.setEndDate(request.experience2().getEndDate());

            profile.setExperience2(experience2);
        } else {
            profile.setExperience2(null);
        }

        if (request.experience3() != null && !request.experience3().getJobTitle().isEmpty()) {
            experience3.setJobTitle(request.experience3().getJobTitle());
            experience3.setCompany(request.experience3().getCompany());
            experience3.setLocation(request.experience3().getLocation());
            experience3.setResponsibilities(request.experience3().getResponsibilities());
            experience3.setAchievements(request.experience3().getAchievements());
            experience3.setStartDate(request.experience3().getStartDate());
            experience3.setEndDate(request.experience3().getEndDate());

            profile.setExperience3(experience3);
        } else {
            profile.setExperience3(null);
        }

        profileRepository.save(profile);

        return new GetProfilesResponseDto(
                profile.getId(),
                profile.getCharacteristics(),
                profile.getDescription(),
                profile.getSkills(),
                profile.getTitle(),
                profile.getExperience1(),
                profile.getExperience2(),
                profile.getExperience3()
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
                        profile.getExperience1(),
                        profile.getExperience2(),
                        profile.getExperience3()
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
                profile.getExperience1(),
                profile.getExperience2(),
                profile.getExperience3()
        );
    }

    public ProfileResponseDto updateProfile(UserDetails userDetails, UpdateProfileDto request) {
        Profile profile = profileRepository.findByIdAndUser_Username(request.id(), userDetails.getUsername())
                .orElseThrow(() -> new BadRequestException("Profile not found"));

        Experience experience1 = new Experience();
        Experience experience2 = new Experience();
        Experience experience3 = new Experience();
        
        profile.setTitle(request.title());
        profile.setDescription(request.description());
        profile.setSkills(request.skills());
        profile.setCharacteristics(request.characteristics());

        experience1.setJobTitle(request.experience1().getJobTitle());
        experience1.setCompany(request.experience1().getCompany());
        experience1.setLocation(request.experience1().getLocation());
        experience1.setResponsibilities(request.experience1().getResponsibilities());
        experience1.setAchievements(request.experience1().getAchievements());
        experience1.setStartDate(request.experience1().getStartDate());
        experience1.setEndDate(request.experience1().getEndDate());

        profile.setExperience1(experience1);

        if (request.experience2() != null && !request.experience2().getJobTitle().isEmpty()) {
            experience2.setJobTitle(request.experience2().getJobTitle());
            experience2.setCompany(request.experience2().getCompany());
            experience2.setLocation(request.experience2().getLocation());
            experience2.setResponsibilities(request.experience2().getResponsibilities());
            experience2.setAchievements(request.experience2().getAchievements());
            experience2.setStartDate(request.experience2().getStartDate());
            experience2.setEndDate(request.experience2().getEndDate());

            profile.setExperience2(experience2);
        } else {
            profile.setExperience2(null);
        }

        if (request.experience3() != null && !request.experience3().getJobTitle().isEmpty()) {
            experience3.setJobTitle(request.experience3().getJobTitle());
            experience3.setCompany(request.experience3().getCompany());
            experience3.setLocation(request.experience3().getLocation());
            experience3.setResponsibilities(request.experience3().getResponsibilities());
            experience3.setAchievements(request.experience3().getAchievements());
            experience3.setStartDate(request.experience3().getStartDate());
            experience3.setEndDate(request.experience3().getEndDate());

            profile.setExperience3(experience3);
        } else {
            profile.setExperience3(null);
        }

        profileRepository.save(profile);
        
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
