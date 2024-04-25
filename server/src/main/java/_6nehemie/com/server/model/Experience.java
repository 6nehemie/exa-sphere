package _6nehemie.com.server.model;

import jakarta.persistence.*;
import lombok.*;

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
