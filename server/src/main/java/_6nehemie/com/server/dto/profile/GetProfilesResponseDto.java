package _6nehemie.com.server.dto.profile;

import _6nehemie.com.server.model.Experience;

public record GetProfilesResponseDto(
        Long id,
        String characteristics,
        String description,
        String skills,
        String title,
        Experience experience1,
        Experience experience2,
        Experience experience3
) {
}
