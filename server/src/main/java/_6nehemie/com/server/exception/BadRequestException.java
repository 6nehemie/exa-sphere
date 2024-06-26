package _6nehemie.com.server.exception;

/**
 * Exception for bad request
 * @param message - the message to be displayed
 */
public class BadRequestException extends RuntimeException{
    
    public BadRequestException(String message) {
        super(message);
    }
}
