package com.quocbao.portfolio.controller;

import com.quocbao.portfolio.model.Contact;
import com.quocbao.portfolio.repository.ContactRepository;
import com.quocbao.portfolio.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        Contact savedContact = contactRepository.save(contact);
        emailService.sendContactEmail(contact.getName(), contact.getEmail(), contact.getCompany());
        return ResponseEntity.ok(savedContact);
    }
}