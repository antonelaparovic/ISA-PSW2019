package com.model;

import javax.persistence.*;

@Entity
public class TimeOffDoctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private OffType type;

    @Enumerated(EnumType.STRING)
    private OffStatus status;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Doctor doctor;
}
