package _6nehemie.com.server.dto.experience;

public record ExperienceDto(
        String jobTitle,
        String company,
        String location,
        String responsibilities,
        String achievements,
        String startDate,
        String endDate
) {
}
