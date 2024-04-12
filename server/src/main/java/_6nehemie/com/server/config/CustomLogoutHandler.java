package _6nehemie.com.server.config;

import _6nehemie.com.server.model.Token;
import _6nehemie.com.server.repository.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;

@Component
public class CustomLogoutHandler implements LogoutHandler {


    private final TokenRepository tokenRepository;
    
    public CustomLogoutHandler(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    @Override
    public void logout(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) {

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        String token = authHeader.substring(7);

        // get token from db
        Token storedToken = tokenRepository.findByToken(token).orElse(null);
        // invalidate token
        if (token != null) {
            storedToken.setValid(false);
            tokenRepository.save(storedToken);
        }
        // save token to db
    }
}