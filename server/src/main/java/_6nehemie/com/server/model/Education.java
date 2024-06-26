package _6nehemie.com.server.model;

import jakarta.persistence.*;
import lombok.*;

/**
 * Education for user
 * @param id - the id of the education
 * @param user - the user of the education
 * @param degree - the degree of the education
 * @param institution - the institution of the education
 * @param graduationYear - the graduation year of the education
 * @param description - the description of the education
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String degree;
    private String institution;
    private Integer graduationYear;
    @Column(columnDefinition = "TEXT")
    private String description;
}