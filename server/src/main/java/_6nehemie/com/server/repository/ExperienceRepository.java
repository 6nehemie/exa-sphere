package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {

    /**
     * Find all experiences by profile id
     *
     * @param profileId - the profile id
     * @return - the list of experiences
     */
    List<Experience> findAllByProfile_Id(Long profileId);

    /**
     * Delete all experiences by profile id
     *
     * @param profileId - the profile id
     * @return
     */
    void deleteAllByProfile_Id(Long profileId);
}
