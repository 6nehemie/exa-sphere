package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.education.EducationResponseDto;
import _6nehemie.com.server.dto.education.GetEducationResponseDto;
import _6nehemie.com.server.dto.education.PostEducationDto;
import _6nehemie.com.server.service.EducationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/educations")
public class EducationController {
    
    private final EducationService educationService;

    public EducationController(EducationService educationService) {
        this.educationService = educationService;
    }

    /**
     * Get mapping to get all educations
     * @param userDetails the user authentication details
     * @return the list of educations
     */
    @GetMapping
    public ResponseEntity<List<GetEducationResponseDto>> getEducations(
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        return ResponseEntity.ok(educationService.getEducations(userDetails));
    }
    
    /**
     * Post mapping to save educations
     * @param userDetails the user authentication details
     * @param request the request body
     * @return the response entity
     */
    @PostMapping
    public ResponseEntity<EducationResponseDto> postEducations(
            @AuthenticationPrincipal UserDetails userDetails, @RequestBody @Validated PostEducationDto request
    ) {
        return ResponseEntity.ok(educationService.saveEducations(userDetails, request));
    }
}
