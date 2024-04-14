package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.NotEmpty;

public record UpdateNameDto(
        @NotEmpty
        String firstName,
        @NotEmpty
        String lastName
) {
}
