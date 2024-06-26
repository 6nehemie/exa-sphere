package _6nehemie.com.server.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

/**
 * The register data transfer object.
 *
 * @param firstName the first name
 * @param lastName  the last name
 * @param email     the email
 * @param password  the password
 */
public record RegisterDto(
        @NotEmpty(message = "First name is required")
        String firstName,
        @NotEmpty(message = "Last name is required")
        String lastName,
        @NotEmpty(message = "Email is required")
        @Email(message = "Invalid email")
        String email,
        @NotEmpty(message = "Password is required")
        String password
) {
}
