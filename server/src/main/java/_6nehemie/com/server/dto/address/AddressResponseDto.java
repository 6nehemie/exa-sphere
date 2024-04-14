package _6nehemie.com.server.dto.address;

import _6nehemie.com.server.model.Address;

public record AddressResponseDto (
        Address address,
        String message,
        Integer status
){
}
