package com.example.contact.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.example.contact.model.ContactForm;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendEmail(ContactForm contactForm) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(contactForm.getEmail());
        message.setTo("rutvipat4@gmail.com"); // Your email address
        message.setSubject("New Contact Form Submission: " + contactForm.getName());
        message.setText("Message: " + contactForm.getMessage() + "\nEmail: " + contactForm.getEmail());

        mailSender.send(message);
    }
}
