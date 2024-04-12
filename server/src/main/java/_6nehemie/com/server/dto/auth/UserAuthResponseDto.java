package _6nehemie.com.server.dto.auth;

public record UserAuthResponseDto(
        Long id,
        String firstName,
        String lastName,
        String username,
        String email
) {
}
