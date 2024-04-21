package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationRepository extends JpaRepository<Education, Long> {
    
    List<Education> findAllByUser_UsernameOrderByGraduationYearDesc(String username);
    
    void deleteAllByUser_Username(String username);
}
