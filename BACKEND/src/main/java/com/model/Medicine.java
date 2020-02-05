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

    @Column(name = "label")
    private String label;






    @Column(nullable = false)
    private String chemicalComposition;

    @Column(nullable = false)
    private String usage;


    @OneToMany(mappedBy = "medicine", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Prescription> prescriptions = new HashSet<>();

    public Long getId() { return  id;
    }
}
