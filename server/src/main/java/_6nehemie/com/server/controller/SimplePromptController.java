package _6nehemie.com.server.controller;

import _6nehemie.com.server.service.AiService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimplePromptController {
    
    private final AiService aiService;

    public SimplePromptController(AiService aiService) {
        this.aiService = aiService;
    }
    
    @GetMapping("/prompt")
    public String simple() {
        return aiService.generateCoverLetterBis();
    }
}
