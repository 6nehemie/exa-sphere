package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Education repository
 */
public interface EducationRepository extends JpaRepository<Education, Long> {

    /**
     * Find all educations by user username
     *
     * @param username - the username of the user
     * @return - the list of educations
     */
    List<Education> findAllByUser_UsernameOrderByGraduationYearDesc(String username);

    /**
     * Delete all educations by user username
     *
     * @param username - the username of the user
     * @return
     */
    void deleteAllByUser_Username(String username);
}
