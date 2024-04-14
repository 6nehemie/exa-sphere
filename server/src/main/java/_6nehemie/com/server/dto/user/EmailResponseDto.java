package _6nehemie.com.server.dto.user;

public record EmailResponseDto(
        String email,
        String message,
        Integer status
) {
}
