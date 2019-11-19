package com.model;

import javax.persistence.*;

@Entity
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Medicine medicine;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private ExaminationReport examinationReport;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Nurse nurse;
}
