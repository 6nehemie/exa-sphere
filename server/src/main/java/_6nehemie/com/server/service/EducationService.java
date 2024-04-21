package _6nehemie.com.server.service;

import _6nehemie.com.server.dto.education.EducationResponseDto;
import _6nehemie.com.server.dto.education.GetEducationResponseDto;
import _6nehemie.com.server.dto.education.PostEducationDto;
import _6nehemie.com.server.exception.NotFoundException;
import _6nehemie.com.server.model.Education;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.EducationRepository;
import _6nehemie.com.server.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationService {
    
    private final EducationRepository educationRepository;
    private final UserRepository userRepository;

    public EducationService(EducationRepository educationRepository, UserRepository userRepository) {
        this.educationRepository = educationRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public EducationResponseDto saveEducations(UserDetails userDetails, PostEducationDto request) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new NotFoundException("User not found!"));
        
        // get education list of the user
        List<Education> educations = educationRepository.findAllByUser_UsernameOrderByGraduationYearDesc(userDetails.getUsername());
        
        if (!educations.isEmpty()) {
            // delete all educations of the user
            educationRepository.deleteAllByUser_Username(userDetails.getUsername());
        }
        
        List<Education> newEducationList = request.educations().stream().map(education -> {
            Education newEducation = new Education();
            newEducation.setUser(user);
            newEducation.setDegree(education.degree());
            newEducation.setInstitution(education.institution());
            newEducation.setGraduationYear(education.graduationYear());
            newEducation.setDescription(education.description());
            return newEducation;
        }).toList();
        
        // save all educations of the user
        educationRepository.saveAll(newEducationList);
        
        return new EducationResponseDto(
                "Educations saved successfully!",
                HttpStatus.CREATED.value()
        );
    }

    public List<GetEducationResponseDto> getEducations(UserDetails userDetails) {
        List<Education> educations = educationRepository.findAllByUser_UsernameOrderByGraduationYearDesc(userDetails.getUsername());
        
        return educations.stream().map(education -> new GetEducationResponseDto(
                education.getId(),
                education.getDegree(),
                education.getInstitution(),
                education.getGraduationYear(),
                education.getDescription()
        )).toList();
    }
}
