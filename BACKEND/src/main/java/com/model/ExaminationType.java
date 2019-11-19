package com.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class ExaminationType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, columnDefinition = "VARCHAR(30)", nullable = false)
    private String label;

    @Column(nullable = false, scale = 2)
    private Double price;


    @OneToMany(mappedBy = "specialized", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Set<Doctor> doctors = new HashSet<>();


    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Clinic clinic;


    @OneToMany(mappedBy = "examinationType", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();
}
