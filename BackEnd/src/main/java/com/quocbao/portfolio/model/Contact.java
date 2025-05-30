package com.quocbao.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String company;

    public Contact() {}
    public Contact(String name, String email, String company) {
        this.name = name;
        this.email = email;
        this.company = company;
    }

    public Long getId() { 
        return id; 
    }
    public void setId(Long id) { 
        this.id = id; 
    }
    public String getName() { 
        return name; 
    }
    public void setName(String name) { 
        this.name = name; 
    }
    public String getEmail() { 
        return email; 
    }
    public void setEmail(String email) { 
        this.email = email; 
    }
    public String getCompany() { 
        return company; 
    }
    public void setCompany(String company) { 
        this.company = company;
     }
     @Override
    public String toString() {
        return "Contact{id=" + id + ", name='" + name + "', email='" + email + "', company='" + company + "'}";
    }
}