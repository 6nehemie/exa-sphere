package _6nehemie.com.server.dto.address;

/**
 * GetAddressResponseDto is a class that represents the response of the address controller
 * It contains the address, the message and the status of the response
 */
public record GetAddressResponseDto(
        Long id,
        String title,
        String street,
        String city,
        String zip,
        String state,
        String country
) {
}
