package _6nehemie.com.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Token for user
 * @param id - the id of the token
 * @param token - the token
 * @param isValid - the validity of the token
 * @param user - the user of the token
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "token", nullable = false)
    private String token;

    @Column(name = "is_valid", nullable = false)
    private boolean isValid;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
