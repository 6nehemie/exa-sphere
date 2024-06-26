package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Generate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GenerateRepository extends JpaRepository<Generate, Long> {

    /**
     * Find all generates by user username
     * @param username - the username of the user
     * @return - the list of generates
     */
    List<Generate> findAllByUser_UsernameOrderByCreatedAtDesc(String username);
    
    /**
     * Find generate by id and user username
     * @param id - the id of the generated cover letter
     * @param username - the username of the user
     * @return - the generated object of the chosen cover letter
     
     */
    Optional<Generate> findByIdAndUser_Username(Long id, String username);

    /**
     * Delete generate by id and user username
     * @param id - the id of the generated cover letter
     * @param username - the username of the user
     */
    void deleteByIdAndUser_Username(Long id, String username);
}
