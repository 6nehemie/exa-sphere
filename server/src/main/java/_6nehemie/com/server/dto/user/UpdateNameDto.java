package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.NotEmpty;

/**
 * DTO for updating name
 * @param firstName - the first name
 * @param lastName - the last name
 */
public record UpdateNameDto(
        @NotEmpty
        String firstName,
        @NotEmpty
        String lastName
) {
}
