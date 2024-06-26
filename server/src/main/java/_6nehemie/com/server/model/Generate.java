package _6nehemie.com.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "generates")
/**
 * Generate for user
 * @param id - the id of the generate
 * @param jobTitle - the job title of the generate
 * @param company - the company of the generate
 * @param location - the location of the generate
 * @param jobType - the job type of the generate
 * @param experienceLevel - the experience level of the generate
 * @param profileId - the profile id of the generate
 * @param description - the description of the generate
 * @param coverLetter - the cover letter of the generate
 * @param createdAt - the created at of the generate
 * @param user - the user of the generate
 */
public class Generate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String jobTitle;
    String company;
    String location;
    String jobType;
    String experienceLevel;
    Long profileId;
    @Column(columnDefinition = "TEXT")
    String description;
    @Column(columnDefinition = "TEXT")
    String coverLetter;

    Long createdAt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
}
