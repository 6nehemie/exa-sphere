package _6nehemie.com.server.dto.user;

/**
 * Response DTO for full name
 * @param firstName - the first name
 * @param lastName - the last name
 * @param message - the message to be displayed
 * @param status - the status of the request
 */
public record FullNameResponseDto(
        String firstName,
        String lastName,
        String message,
        Integer status
) {
}
