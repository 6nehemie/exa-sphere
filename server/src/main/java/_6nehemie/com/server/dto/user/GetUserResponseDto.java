package _6nehemie.com.server.dto.user;

import _6nehemie.com.server.enums.Registration;

public record GetUserResponseDto(
        Long id,
        String avatar,
        String firstName,
        String lastName,
        String email,
        String username,
        String description,
        Registration authType
) {
}
