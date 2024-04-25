package _6nehemie.com.server.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ApiKeyService {
    
    @Value("${exa-sphere.api-key}")
    private String apiKey;
    
    public boolean isValidApiKey(String apiKey) {
        return this.apiKey.equals(apiKey);
    }
}
