package _6nehemie.com.server.dto.profile;

import _6nehemie.com.server.dto.experience.ExperienceResponseDto;

import java.util.List;

public record GetProfilesResponseDto(
        Long id,
        String characteristics,
        String description,
        String skills,
        String title,
        List<ExperienceResponseDto> experiences
) {
}
