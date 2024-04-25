package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Generate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GenerateRepository extends JpaRepository<Generate, Long> {
    
    List<Generate> findAllByUser_UsernameOrderByCreatedAtDesc(String username);
    
    Optional<Generate> findByIdAndUser_Username(Long id, String username);

    void deleteByIdAndUser_Username(Long id, String username);
}
