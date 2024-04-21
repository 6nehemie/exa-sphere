package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Profile;
import _6nehemie.com.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {
    
    List<Profile> findByUser(User user);
    
    List<Profile> findByUser_Username(String username);
    
    Optional<Profile> findByIdAndUser_Username(Long id, String username);
    
    void deleteByIdAndUser_Username(Long id, String username);
    
    Boolean existsByIdAndUser_Username(Long id, String username);
}
