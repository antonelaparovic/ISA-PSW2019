package com.dtos;

public class ClinicalCenterAdministratorDTO {
    private String email;
    private String password;
    private String name;
    private String surname;
    private String number;


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

    public void setName(String firstName) {
        this.name = firstName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String lastName) {
        this.surname = lastName;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String phoneNumber) {
        this.number = phoneNumber;
    }

}
