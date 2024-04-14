package _6nehemie.com.server.dto.user;

import _6nehemie.com.server.model.Address;

public record AddressResponse(
        Address address,
        String message,
        Integer status
) {
}
