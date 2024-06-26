package _6nehemie.com.server.dto.avatar;

/**
 * Response DTO for updating avatar
 * @param avatarUrl - URL of the new avatar
 * @param message - the message to be displayed
 * @param status - the status of the request
 */
public record UpdateAvatarResponseDto(
        String avatarUrl,
        String message,
        Integer status
) {
}
