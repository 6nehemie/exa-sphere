package _6nehemie.com.server.dto.address;

import jakarta.validation.constraints.NotEmpty;

/**
 * PostAddressDto is a class that represents the request of the address controller
 * @param title the title of the address
 * @param street the street of the address
 * @param city the city of the address
 * @param zip the zip of the address
 * @param state the state of the address
 * @param country the country of the address
 */
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
