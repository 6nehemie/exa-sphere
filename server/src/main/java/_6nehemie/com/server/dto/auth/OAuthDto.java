package _6nehemie.com.server.dto.auth;

/**
 * Data transfer object for login.
 * @param firstName
 * @param lastName
 * @param email
 * @param avatar
 * @param provider
 */
public record OAuthDto(
        String firstName,
        String lastName,
        String email,
        String avatar,
        ProviderDto provider
) {
}
