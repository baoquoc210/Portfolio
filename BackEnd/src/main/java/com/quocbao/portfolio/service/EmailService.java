package com.quocbao.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${app.email.recipient}")
    private String recipientEmail;

    public void sendContactEmail(String name, String email, String company) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(recipientEmail);
        message.setSubject("New Contact Request from Portfolio");
        message.setText(
            "You have received a new contact request:\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Company: " + company + "\n\n" +
            "Please follow up with them at your earliest convenience."
        );
        message.setFrom("noreply@portfolio.com");
        mailSender.send(message);
    }
}