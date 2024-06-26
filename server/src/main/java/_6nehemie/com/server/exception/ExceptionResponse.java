package _6nehemie.com.server.exception;

import lombok.Getter;
import lombok.Setter;

/**
 * Exception response for description
 * @param timestamp - the timestamp of the exception
 * @param status - the status of the exception
 * @param error - the error of the exception
 * @param message - the message of the exception
 * @param path - the path of the exception
 */
@Getter
@Setter
public class ExceptionResponse {

    private Long timestamp;
    private int status;
    private String error;
    private String message;
    private String path;

    public ExceptionResponse() {
    }
}
