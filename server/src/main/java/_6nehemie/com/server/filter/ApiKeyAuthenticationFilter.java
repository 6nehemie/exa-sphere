package _6nehemie.com.server.filter;

import _6nehemie.com.server.service.ApiKeyService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class ApiKeyAuthenticationFilter extends OncePerRequestFilter {
    
    private final ApiKeyService apiKeyService;

    public ApiKeyAuthenticationFilter(ApiKeyService apiKeyService) {
        this.apiKeyService = apiKeyService;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain
    )throws ServletException, IOException {

        String apiKey = request.getHeader("X-API-Key");

        if (apiKey != null && apiKeyService.isValidApiKey(apiKey)) {
            // API key is valid, proceed with the request
            filterChain.doFilter(request, response);
        } else {
            // API key is invalid or missing, return unauthorized response
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
    }
}
