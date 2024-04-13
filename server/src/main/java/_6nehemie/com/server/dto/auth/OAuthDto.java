package _6nehemie.com.server.dto.auth;

public record OAuthDto(
        String firstName,
        String lastName,
        String email,
        String avatar,
        ProviderDto provider
) {
}
