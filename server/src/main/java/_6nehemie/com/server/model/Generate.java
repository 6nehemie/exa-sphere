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
