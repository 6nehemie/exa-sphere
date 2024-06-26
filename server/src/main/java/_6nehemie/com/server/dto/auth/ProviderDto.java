package _6nehemie.com.server.dto.auth;

/**
 * The Oauth2 provider data transfer object.
 *
 * @param provider  the provider name
 * @param type      the provider type
 * @param issuedUrl the provider issued url
 */
public record ProviderDto(
        String provider,
        String type,
        String issuedUrl
) {
}
