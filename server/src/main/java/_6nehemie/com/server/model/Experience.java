package _6nehemie.com.server.model;

import jakarta.persistence.*;
import lombok.*;

/**
 * Experience for user
 * @param id - the id of the experience
 * @param jobTitle - the job title of the experience
 * @param company - the company of the experience
 * @param location - the location of the experience
 * @param responsibilities - the responsibilities of the experience
 * @param achievements - the achievements of the experience
 * @param startDate - the start date of the experience
 * @param endDate - the end date of the experience
 * @param profile - the profile of the experience
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String jobTitle;
    private String company;
    private String location;
    
    @Column(columnDefinition = "TEXT")
    private String responsibilities;
    
    @Column(columnDefinition = "TEXT")
    private String achievements;
    
    private String startDate;
    private String endDate;
    
    @ManyToOne
    @JoinColumn(name = "profile_id")
    private Profile profile;
}
