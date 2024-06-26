package _6nehemie.com.server.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Address for user
 * @param street - the street of the user
 * @param city - the city of the user
 * @param state - the state of the user
 * @param country - the country of the user
 * @param zip - the zip of the user
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class Address {
    
    private String street;
    private String city;
    private String state;
    private String country;
    private String zip;
}
