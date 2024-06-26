package _6nehemie.com.server.dto.auth;

/**
 * The user authentication response data transfer object.
 * @param id the user id
 * @param firstName the first name
 * @param lastName the last name
 * @param username the username
 * @param email the email
 */
public record UserAuthResponseDto(
        Long id,
        String firstName,
        String lastName,
        String username,
        String email
) {
}
