package _6nehemie.com.server.dto.user;

import _6nehemie.com.server.enums.Registration;
import _6nehemie.com.server.model.Address;

/**
 * Response DTO for getting user
 * @param id - the id of the user
 * @param avatar - the avatar of the user
 * @param firstName - the first name of the user
 * @param lastName - the last name of the user
 * @param email - the email of the user
 * @param username - the username of the user
 * @param description - the description of the user
 * @param isVerified - the verification status of the user
 * @param authType - the authentication type of the user
 * @param address - the address of the user
 */
public record GetUserResponseDto(
        Long id,
        String avatar,
        String firstName,
        String lastName,
        String email,
        String username,
        String description,
        boolean isVerified,
        Registration authType,
        Address address
) {
}
