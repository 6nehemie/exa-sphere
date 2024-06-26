package _6nehemie.com.server.exception;

/**
 * Exception for not found
 * @param message - the message to be displayed
 */
public class NotFoundException extends RuntimeException {
    
        public NotFoundException(String message) {
            super(message);
        }
}
