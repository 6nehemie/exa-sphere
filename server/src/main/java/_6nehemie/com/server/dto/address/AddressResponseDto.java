package _6nehemie.com.server.dto.address;

import _6nehemie.com.server.model.Address;

/**
 * AddressResponseDto is a class that represents the response of the address controller
 * It contains the address, the message and the status of the response
 *
 * @param address the address
 * @param message the message
 * @param status  the status
 */
public record AddressResponseDto(
        Address address,
        String message,
        Integer status
) {
}
