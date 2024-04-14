package _6nehemie.com.server.dto.user;

public record FullNameResponseDto(
        String firstName,
        String lastName,
        String message,
        Integer status
) {
}
