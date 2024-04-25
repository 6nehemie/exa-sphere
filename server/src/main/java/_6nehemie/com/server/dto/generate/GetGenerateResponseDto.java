package _6nehemie.com.server.dto.generate;

public record GetGenerateResponseDto(
        Long id,
        String jobTitle,
        String company,
        String location,
        String coverLetter
) {
}
