package _6nehemie.com.server.service;

import _6nehemie.com.server.dto.generate.GenerateResponseDto;
import _6nehemie.com.server.dto.generate.GetGenerateResponseDto;
import _6nehemie.com.server.dto.generate.PostGenerateDto;
import _6nehemie.com.server.dto.generate.PutGenerateDto;
import _6nehemie.com.server.exception.NotFoundException;
import _6nehemie.com.server.model.Education;
import _6nehemie.com.server.model.Generate;
import _6nehemie.com.server.model.Profile;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.EducationRepository;
import _6nehemie.com.server.repository.GenerateRepository;
import _6nehemie.com.server.repository.ProfileRepository;
import _6nehemie.com.server.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class GenerateService {

    private final GenerateRepository generateRepository;
    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;
    private final EducationRepository educationRepository;
    private final AiService aiService;

    public GenerateService(GenerateRepository generateRepository, UserRepository userRepository, ProfileRepository profileRepository, EducationRepository educationRepository, AiService aiService) {
        this.generateRepository = generateRepository;
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
        this.educationRepository = educationRepository;
        this.aiService = aiService;
    }

    public GetGenerateResponseDto createGenerate(UserDetails userDetails, PostGenerateDto request) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new NotFoundException("User not found")
        );

        Generate generate = new Generate();
        generate.setJobTitle(request.jobTitle());
        generate.setCompany(request.company());
        generate.setLocation(request.location());
        generate.setJobType(request.jobType());
        generate.setExperienceLevel(request.experienceLevel());
        generate.setProfileId(request.profileId());
        generate.setDescription(request.description());
        generate.setCreatedAt(new Date().getTime());
        generate.setUser(user);

        // get profile data from the user
        Profile profile = profileRepository.findByIdAndUser_Username(request.profileId(), userDetails.getUsername()).orElseThrow(
                () -> new NotFoundException("Profile not found")
        );

        // get education data from the user
        List<Education> educations = educationRepository
                .findAllByUser_UsernameOrderByGraduationYearDesc(userDetails.getUsername());

        // generate ai cover letter from those data
        generate.setCoverLetter(aiService.generateCoverLetter(generate, user, profile, educations));

        // save the generated cover letter
        generateRepository.save(generate);

        return new GetGenerateResponseDto(
                generate.getId(),
                generate.getJobTitle(),
                generate.getCompany(),
                generate.getLocation(),
                generate.getCoverLetter()
        );
    }

    public List<GetGenerateResponseDto> getAllGenerates(UserDetails userDetails) {
        List<Generate> generateList = generateRepository.findAllByUser_UsernameOrderByCreatedAtDesc(userDetails.getUsername());

        return generateList.stream().map(generate -> new GetGenerateResponseDto(
                generate.getId(),
                generate.getJobTitle(),
                generate.getCompany(),
                generate.getLocation(),
                generate.getCoverLetter()
        )).toList();
    }

    public GetGenerateResponseDto getGenerateById(UserDetails userDetails, Long id) {
        Generate generate = generateRepository.findByIdAndUser_Username(id, userDetails.getUsername()).orElseThrow(
                () -> new NotFoundException("Generate not found")
        );

        return new GetGenerateResponseDto(
                generate.getId(),
                generate.getJobTitle(),
                generate.getCompany(),
                generate.getLocation(),
                generate.getCoverLetter()
        );
    }

    public GenerateResponseDto updateCoverLetter(UserDetails userDetails, PutGenerateDto request) {
        Generate generate = generateRepository.findByIdAndUser_Username(request.id(), userDetails.getUsername()).orElseThrow(
                () -> new NotFoundException("Generate not found")
        );

        generate.setCoverLetter(request.coverLetter());
        generateRepository.save(generate);

        return new GenerateResponseDto("Cover letter updated successfully", HttpStatus.OK.value());
    }

    @Transactional
    public GenerateResponseDto deleteGenerate(UserDetails userDetails, Long id) {
        generateRepository.deleteByIdAndUser_Username(id, userDetails.getUsername());

        return new GenerateResponseDto("Chat deleted successfully", HttpStatus.OK.value());
    }
}
