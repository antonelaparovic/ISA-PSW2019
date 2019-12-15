package com.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class MedicalRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Integer height;

    @Column
    private Integer weight;

    @Column(columnDefinition = "VARCHAR(3)")
    private String bloodType;

    @Column
    private String allergies;

    @OneToOne
    private Patient patient;

    @OneToMany(mappedBy = "medicalRecord", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<ExaminationReport> examinationReports = new HashSet<>();

    public MedicalRecord(Long id, Integer height, Integer weight, String bloodType, String allergies, Patient patient) {
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.bloodType = bloodType;
        this.allergies = allergies;
        this.patient = patient;
    }
}
