package _6nehemie.com.server.dto.auth;

public record ProviderDto(
        String provider,
        String type,
        String issuedUrl
) {
}
