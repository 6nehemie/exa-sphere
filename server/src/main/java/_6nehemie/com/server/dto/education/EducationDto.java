package _6nehemie.com.server.dto.education;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotEmpty;

public record EducationDto(
        @NotEmpty(message = "Degree is required")
        String degree,
        @NotEmpty(message = "Institution is required")
        String institution,
        @NotEmpty(message = "Graduation year is required")
        Integer graduationYear,
        @Max(value = 250, message = "Description must be less than 250 characters")
        String description
) {
}
