package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.NotEmpty;

public record UpdateAddressDto(
        @NotEmpty(message = "Street is required")
        String street,
        @NotEmpty(message = "City is required")
        String city,
        @NotEmpty(message = "State is required")
        String state,
        @NotEmpty(message = "Country is required")
        String country,
        @NotEmpty(message = "Zip code is required")
        String zip
) {
}
