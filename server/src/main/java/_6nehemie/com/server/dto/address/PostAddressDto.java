package _6nehemie.com.server.dto.address;

import jakarta.validation.constraints.NotEmpty;

public record PostAddressDto(
        @NotEmpty(message = "Title is required")
        String title,
        @NotEmpty(message = "Street is required")
        String street,
        @NotEmpty(message = "City is required")
        String city,
        @NotEmpty(message = "Zip is required")
        String zip,
        @NotEmpty(message = "State is required")
        String state,
        @NotEmpty(message = "Country is required")
        String country
) {
}
