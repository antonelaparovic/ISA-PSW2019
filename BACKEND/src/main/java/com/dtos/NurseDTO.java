package com.dtos;

public class NurseDTO {
    private String email;
    private String password;
    private String name;
    private String surname;
    private String number;
    private String city;
    private String address;
    private String country;

    public String getCity() { return city; }

    public String getAddress() { return address; }

    public String getCountry() { return country; }

    public void setCity(String city) { this.city = city; }

    public void setAddress(String address) { this.address = address; }

    public void setCountry(String country) { this.country = country; }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
