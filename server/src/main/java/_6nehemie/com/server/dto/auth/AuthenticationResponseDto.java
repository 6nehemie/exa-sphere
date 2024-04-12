package _6nehemie.com.server.dto.auth;

import java.util.Date;

public record AuthenticationResponseDto(
        Long id,
        String accessToken,
        Date expiresIn,
        UserAuthResponseDto user
) {
    
}
