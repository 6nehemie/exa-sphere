package _6nehemie.com.server.dto.generate;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record PutGenerateDto(
        @NotNull(message = "Job title is required")
        Long id,
        @NotEmpty(message = "Cover letter is required")
        String coverLetter
) {
}
