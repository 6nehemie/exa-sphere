package _6nehemie.com.server.dto;

/**
 * Response DTO for description
 * @param message - the message to be displayed
 * @param status - the status of the request
 */
public record ResponseDto(
        String message,
        Integer status) {
}
