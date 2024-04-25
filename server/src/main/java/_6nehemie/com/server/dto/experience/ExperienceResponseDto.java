package _6nehemie.com.server.dto.experience;

public record ExperienceResponseDto(
        Long id,
        String jobTitle,
        String company,
        String location,
        String responsibilities,
        String achievements,
        String startDate,
        String endDate
) {
}
