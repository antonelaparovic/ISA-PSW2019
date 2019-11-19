package com.model;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Doctor  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String firstName;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String lastName;

    @Column(columnDefinition = "VARCHAR(11)", unique = true, nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private LocalTime workHoursFrom;

    @Column(nullable = false)
    private LocalTime workHoursTo;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Clinic clinic;

    @ManyToMany(mappedBy = "doctors")
    private Set<Examination> examinations = new HashSet<Examination>();

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private ExaminationType specialized;

    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<DoctorOff> timeOffDoctors = new HashSet<>();

    @Enumerated(EnumType.STRING)
    private DoctorStatus status;

    public Doctor(){

    }
}
