package com.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class ClinicAdministrator{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String name;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String surname;

    @Column(columnDefinition = "VARCHAR(10)", unique = true, nullable = false)
    private String phone;


    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Clinic clinic;

   // @Enumerated(EnumType.STRING)
  //  private UserStatus status;

    @OneToMany(mappedBy = "clinicAdministrator", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();
}
