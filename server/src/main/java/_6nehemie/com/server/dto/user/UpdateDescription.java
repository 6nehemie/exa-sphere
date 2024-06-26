package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.Max;

/**
 * DTO for updating description
 * @param description - the description
 */
public record UpdateDescription(
        @Max(value = 250, message = "Description is too long")
        String description
) {
}
