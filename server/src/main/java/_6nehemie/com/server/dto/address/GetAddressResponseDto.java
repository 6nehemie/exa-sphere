package _6nehemie.com.server.dto.address;

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
