package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Profile;
import _6nehemie.com.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

    /**
     * Find all profiles by user
     * @param user - the user
     * @return - the list of profiles
     */
    List<Profile> findByUser(User user);
    
    /**
     * Find all profiles by user username
     * @param username - the username of the user
     * @return - the list of profiles
     */
    List<Profile> findByUser_Username(String username);
    
    /**
     * Find profile by id and user username
     * @param id - the id of the profile
     * @param username - the username of the user
     * @return - the profile object
     */
    Optional<Profile> findByIdAndUser_Username(Long id, String username);
    
    /**
     * Delete profile by id and user username
     * @param id - the id of the profile
     * @param username - the username of the user
     */
    void deleteByIdAndUser_Username(Long id, String username);
    
    /**
     * Check if profile exists by id and user username
     * @param id - the id of the profile
     * @param username - the username of the user
     * @return - true if exists, false otherwise
     */
    Boolean existsByIdAndUser_Username(Long id, String username);
}
