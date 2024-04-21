package _6nehemie.com.server.dto.education;

public record GetEducationResponseDto(
    Long id,
    String degree,
    String institution,
    Integer graduationYear,
    String description
) {
}
