package _6nehemie.com.server.dto.profile;

import _6nehemie.com.server.dto.experience.ExperienceDto;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.util.List;

public record PostProfileDto(
        @NotEmpty(message = "Title is required")
        String title,
        @NotEmpty(message = "Description is required")
        String description,
        @NotEmpty(message = "Skills are required")
        String skills,
        @NotEmpty(message = "Characteristics are required")
        String characteristics,
        @Size(min = 1, message = "At least one experience is required")
        List<ExperienceDto> experiences
) {
}
