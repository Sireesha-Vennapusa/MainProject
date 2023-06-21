package com.example.client.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String mobile;
    private String address;
    
    public Profile(long id, String firstName, String lastName, String mobile, String address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.address = address;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    
    public Profile() {
    }
    @Override
    public String toString() {
        return "Profile [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", mobile=" + mobile
                + ", address=" + address + "]";
    }
    
}
