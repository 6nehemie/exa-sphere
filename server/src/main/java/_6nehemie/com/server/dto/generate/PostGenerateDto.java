package _6nehemie.com.server.dto.generate;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record PostGenerateDto(
        @NotEmpty(message = "Job title is required")
        String jobTitle,
        @NotEmpty(message = "Company is required")
        String company,
        @NotEmpty(message = "Location is required")
        String location,
        @NotEmpty(message = "Job type is required")
        String jobType,
        @NotEmpty(message = "Experience level is required")
        String experienceLevel,
        @NotNull(message = "Profile id is required")
        Long profileId,
        @NotEmpty(message = "Description is required")
        String description
) {
}
