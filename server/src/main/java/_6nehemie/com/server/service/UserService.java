package _6nehemie.com.server.service;

import _6nehemie.com.server.dto.user.GetUserResponseDto;
import _6nehemie.com.server.exception.NotFoundException;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public GetUserResponseDto getUser(UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow(
                () -> new NotFoundException("User not found!"));

        return new GetUserResponseDto(
                user.getId(),
                user.getAvatar(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getUsername(),
                user.getDescription(),
                user.getAuthType()
        );
    }
}
