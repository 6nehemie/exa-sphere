package _6nehemie.com.server.service;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class CodeGeneratorService {

    /**
     * Generate a 6-digit code
     *
     * @return - the 6-digit code
     */
    public String generateSixDigitCode() {
        Random random = new Random();
        int code = random.nextInt(900000) + 100000; // This will always generate a 6-digit number
        return String.valueOf(code);
    }
}
