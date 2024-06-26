package _6nehemie.com.server.dto.auth;

/**
 * Data transfer object for login.
 * @param username
 * @param password
 */
public record LoginDto(
        String username,
        String password
) {
}
