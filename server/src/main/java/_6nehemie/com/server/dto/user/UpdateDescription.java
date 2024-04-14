package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.Max;

public record UpdateDescription(
        @Max(value = 250, message = "Description is too long")
        String description
) {
}
