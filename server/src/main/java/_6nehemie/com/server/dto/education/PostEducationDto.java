package _6nehemie.com.server.dto.education;

import jakarta.validation.constraints.Size;

import java.util.List;

public record PostEducationDto(
        @Size(max = 3, message = "Maximum of 3 educations are allowed")
        List<EducationDto> educations
) {
}
