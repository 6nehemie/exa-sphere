package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
        
        List<Experience> findAllByProfile_Id(Long profileId);
        
        void deleteAllByProfile_Id(Long profileId);
}
