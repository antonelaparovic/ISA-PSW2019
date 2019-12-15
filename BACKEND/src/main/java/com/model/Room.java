package com.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, columnDefinition = "VARCHAR(30)", nullable = false)
    private String label;

    @Enumerated(EnumType.STRING)
    private ExaminationKind kind;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Clinic clinic;

    @JsonIgnore
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();

}
