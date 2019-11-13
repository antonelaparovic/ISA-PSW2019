package com.model;


public class User {
    private String firstName;
    private String secondName;
    private String password;
    private String email;
    private String address;
    private String city;
    private String state;
    private String telephone;
    private String uniqueNum;
    private String id;
    private Role role;

    public User() {
    }

    public User(String firstName, String secondName, String password, String email, String address, String city, String state, String telephone, String uniqueNum, String id) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.password = password;
        this.email = email;
        this.address = address;
        this.city = city;
        this.state = state;
        this.telephone = telephone;
        this.uniqueNum = uniqueNum;
        this.id = id;
    }
}
