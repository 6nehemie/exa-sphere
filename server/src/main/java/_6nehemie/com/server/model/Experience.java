package _6nehemie.com.server.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class Experience {
    private String jobTitle;
    private String company;
    private String location;
    private String responsibilities;
    private String achievements;
    private String startDate;
    private String endDate;
}
