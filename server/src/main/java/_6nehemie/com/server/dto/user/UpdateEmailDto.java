package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

/**
 * DTO for updating email
 * @param email - the email
 * @param password - the password
 */
public record UpdateEmailDto(
        @Email(message = "Email is invalid")
        @NotEmpty(message = "Email is required")
        String email,
        @NotEmpty(message = "Password is required")
        String password
) {
}
