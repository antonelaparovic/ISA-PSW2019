package com.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Medicine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, columnDefinition = "VARCHAR(30)", nullable = false)
    private String label;

    @Column(nullable = false)
    private String chemicalComposition;

    @Column(nullable = false)
    private String usage;

    @JsonIgnore
    @OneToMany(mappedBy = "medicine", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Prescription> prescriptions = new HashSet<>();
}
