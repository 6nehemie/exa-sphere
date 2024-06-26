package _6nehemie.com.server.dto.user;

/**
 * Response DTO for description
 * @param description - the description
 * @param message - the message to be displayed
 * @param status - the status of the request
 */
public record DescriptionResponseDto(
        String description,
        String message,
        Integer status
) {
}
