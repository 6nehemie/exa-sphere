package _6nehemie.com.server.dto.user;

import _6nehemie.com.server.enums.Registration;
import _6nehemie.com.server.model.Address;

public record GetUserResponseDto(
        Long id,
        String avatar,
        String firstName,
        String lastName,
        String email,
        String username,
        String description,
        boolean isVerified,
        Registration authType,
        Address address
) {
}
