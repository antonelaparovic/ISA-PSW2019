package com.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Clinic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "VARCHAR(50)",nullable = false)
    private String name;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String description;

    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations=new HashSet<>();


    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Doctor> doctors=new HashSet<>();

    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Nurse> nurses=new HashSet<>();

    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Room> rooms=new HashSet<>();

    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<ClinicAdministrator> clinicAdministrators=new HashSet<>();

    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<ExaminationType> examinationTypes=new HashSet<>();



    public Clinic() {
    }

}
