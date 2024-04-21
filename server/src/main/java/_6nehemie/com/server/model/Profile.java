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
@Entity
@Table(name = "profiles")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String skills;
    private String characteristics;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "company", column = @Column(name = "experience1_company")),
            @AttributeOverride(name = "jobTitle", column = @Column(name = "experience1_jobTitle")),
            @AttributeOverride(name = "location", column = @Column(name = "experience1_location")),
            @AttributeOverride(name = "responsibilities", column = @Column(name = "experience1_responsibilities")),
            @AttributeOverride(name = "achievements", column = @Column(name = "experience1_achievements")),
            @AttributeOverride(name = "startDate", column = @Column(name = "experience1_startDate")),
            @AttributeOverride(name = "endDate", column = @Column(name = "experience1_endDate"))
    })
    private Experience experience1;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "company", column = @Column(name = "experience2_company")),
            @AttributeOverride(name = "jobTitle", column = @Column(name = "experience2_jobTitle")),
            @AttributeOverride(name = "location", column = @Column(name = "experience2_location")),
            @AttributeOverride(name = "responsibilities", column = @Column(name = "experience2_responsibilities")),
            @AttributeOverride(name = "achievements", column = @Column(name = "experience2_achievements")),
            @AttributeOverride(name = "startDate", column = @Column(name = "experience2_startDate")),
            @AttributeOverride(name = "endDate", column = @Column(name = "experience2_endDate"))
    })
    private Experience experience2;

    @Embedded
    @Column(name = "experience3")
    @AttributeOverrides({
            @AttributeOverride(name = "company", column = @Column(name = "experience3_company")),
            @AttributeOverride(name = "jobTitle", column = @Column(name = "experience3_jobTitle")),
            @AttributeOverride(name = "location", column = @Column(name = "experience3_location")),
            @AttributeOverride(name = "responsibilities", column = @Column(name = "experience3_responsibilities")),
            @AttributeOverride(name = "achievements", column = @Column(name = "experience3_achievements")),
            @AttributeOverride(name = "startDate", column = @Column(name = "experience3_startDate")),
            @AttributeOverride(name = "endDate", column = @Column(name = "experience3_endDate"))
    })
    private Experience experience3;
}
