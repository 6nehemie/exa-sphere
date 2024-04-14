package _6nehemie.com.server.dto.avatar;

public record UpdateAvatarResponseDto(
        String avatarUrl,
        String message,
        Integer status
) {
}
