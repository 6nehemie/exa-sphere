package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long>{

    @Query("""
            select t from Token t inner join t.user u
            where u.id = :userId and t.isValid = true
            """)
    List<Token> findAllByUser_Id(Long userId);

    Optional<Token> findByToken(String token);
}
