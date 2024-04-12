package _6nehemie.com.server.dto.user;

public record GetUserResponseDto(
        Long id,
        String avatar,
        String firstName,
        String lastName,
        String email,
        String username,
        String description
) {
}
