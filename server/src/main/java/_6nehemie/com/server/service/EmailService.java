package _6nehemie.com.server.service;

import com.resend.Resend;
import com.resend.core.exception.ResendException;
import com.resend.services.emails.model.SendEmailRequest;
import com.resend.services.emails.model.SendEmailResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Value("${email.resend.access-key}")
    private String resendAccessKey;

    public void sendEmail(String to, String subject, String body) {
        Resend resend = new Resend(resendAccessKey);

        SendEmailRequest sendEmailRequest = SendEmailRequest.builder()
                .from("Exa Sphere <exa-sphere@pulse-app.ch>")
                .to(to)
                .subject(subject)
                .html("<strong>" + body + "</strong>")
                .build();

        try {
            SendEmailResponse data = resend.emails().send(sendEmailRequest);
//            System.out.println(data.getId());
        } catch (ResendException e) {
//            System.out.println(e.getMessage());
        }
    }
}
