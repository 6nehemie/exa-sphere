package _6nehemie.com.server.dto.user;

/**
 * Response DTO for password
 * @param message - the message to be displayed
 * @param status - the status of the request
 */
public record PasswordResponseDto(
        String message,
        Integer status
) {
}
