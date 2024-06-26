package _6nehemie.com.server.dto.user;

import jakarta.validation.constraints.NotEmpty;

/**
 * DTO for updating address
 * @param street - the street
 * @param city - the city
 * @param state - the state
 * @param country - the country
 * @param zip - the zip code
 */
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
