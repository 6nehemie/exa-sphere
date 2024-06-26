package _6nehemie.com.server.dto.user;

import _6nehemie.com.server.model.Address;

/**
 * Response DTO for address
 * @param address - the address
 * @param message - the message to be displayed
 * @param status - the status of the request
 */
public record AddressResponse(
        Address address,
        String message,
        Integer status
) {
}
