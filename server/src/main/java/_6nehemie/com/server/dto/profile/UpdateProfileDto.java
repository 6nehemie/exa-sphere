package _6nehemie.com.server.dto.profile;

import _6nehemie.com.server.model.Experience;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record UpdateProfileDto(
        @NotNull(message = "Id is required")
        Long id,
        @NotEmpty(message = "Title is required")
        String title,
        @NotEmpty(message = "Description is required")
        String description,
        @NotEmpty(message = "Skills are required")
        String skills,
        @NotEmpty(message = "Characteristics are required")
        String characteristics,
        @NotNull(message = "Experience 1 is required")
        Experience experience1,
        Experience experience2,
        Experience experience3
) {
}
