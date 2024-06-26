package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Find user by username
     *
     * @param username - the username of the user
     * @return - the user object
     */
    Optional<User> findByUsername(String username);

    /**
     * Find user by email
     *
     * @param email - the email of the user
     * @return - the user object
     */
    Boolean existsByUsername(String username);

    /**
     * Check if user exists by email
     *
     * @param email - the email of the user
     * @return - true if exists, false otherwise
     */
    Boolean existsByEmail(String email);
}
