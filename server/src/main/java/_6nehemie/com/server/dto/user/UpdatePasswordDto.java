package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public record UpdatePasswordDto(
        @NotEmpty(message = "Password is required")
        String password,
        @Size(min = 6, message = "New password must be at least 6 characters")
        @NotEmpty(message = "New password is required")
        String newPassword
) {
}
