package _6nehemie.com.server.dto.auth;

import java.util.Date;

/**
 * AuthenticationResponseDto is a class that represents the response of the authentication controller
 * @param id the id of the user
 * @param accessToken the access token
 * @param expiresIn the expiration date of the token
 * @param user the information of the user
 */
public record AuthenticationResponseDto(
        Long id,
        String accessToken,
        Date expiresIn,
        UserAuthResponseDto user
) {
    
}
