package com.model;

import javax.persistence.*;

@Entity
public class User {
    @Column(columnDefinition = "VARCHAR(50)",nullable = false)
    private String firstName;

    private String secondName;
    private String password;
    private String email;
    private String address;
    private String city;
    private String state;
    private String telephone;
    private String uniqueNum;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    public User() {
    }

    public User(String firstName, String secondName, String password, String email, String address, String city, String state, String telephone, String uniqueNum, Long id) {
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
