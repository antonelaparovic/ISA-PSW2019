package com.model;


import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class ExaminationReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime timeCreated;

    @Column(nullable = false)
    private String comment;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private MedicalRecord medicalRecord;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Diagnose diagnose;

    @OneToMany(mappedBy = "examinationReport", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Prescription> prescriptions = new HashSet<>();

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Doctor doctor;

    @OneToOne()
    private Examination examination;


}
