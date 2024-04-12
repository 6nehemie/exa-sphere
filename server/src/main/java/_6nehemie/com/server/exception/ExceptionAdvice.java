package _6nehemie.com.server.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionAdvice {
    
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ExceptionResponse> handleBadRequestException(BadRequestException exception, HttpServletRequest request) {

        ExceptionResponse exceptionResponse = new ExceptionResponse();

        exceptionResponse.setTimestamp(System.currentTimeMillis());
        exceptionResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        exceptionResponse.setError("Bad Request");
        exceptionResponse.setMessage(exception.getMessage());
        exceptionResponse.setPath(request.getRequestURI());

        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
    
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ExceptionResponse> handleNotFoundException(NotFoundException exception, HttpServletRequest request) {

        ExceptionResponse exceptionResponse = new ExceptionResponse();

        exceptionResponse.setTimestamp(System.currentTimeMillis());
        exceptionResponse.setStatus(HttpStatus.NOT_FOUND.value());
        exceptionResponse.setError("Not Found");
        exceptionResponse.setMessage(exception.getMessage());
        exceptionResponse.setPath(request.getRequestURI());

        return new ResponseEntity<>(exceptionResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<ExceptionResponse> handleAllException(Exception exception, HttpServletRequest request) {

        ExceptionResponse exceptionResponse = new ExceptionResponse();

        exceptionResponse.setTimestamp(System.currentTimeMillis());
        exceptionResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        exceptionResponse.setError("Error occurred!");
        exceptionResponse.setMessage(exception.getMessage());
        exceptionResponse.setPath(request.getRequestURI());

        return new ResponseEntity<>(exceptionResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
