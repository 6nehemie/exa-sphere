package _6nehemie.com.server.exception;

public class BadRequestException extends RuntimeException{
    
    public BadRequestException(String message) {
        super(message);
    }
}
