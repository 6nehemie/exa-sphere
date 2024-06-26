package _6nehemie.com.server.repository;

import _6nehemie.com.server.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {

    /**
     * Find all tokens by user id
     *
     * @param userId - the user id
     * @return - the list of tokens for the user
     */
    @Query("""
            select t from Token t inner join t.user u
            where u.id = :userId and t.isValid = true
            """)
    List<Token> findAllByUser_Id(Long userId);

    /**
     * Find token by token
     *
     * @param token - the token
     * @return - the token object
     */
    Optional<Token> findByToken(String token);
}
