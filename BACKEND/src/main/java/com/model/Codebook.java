package com.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
@Entity
public class Codebook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany
    @Column(name = "diagnoses")
    private Set<Diagnose> dijagnoze;

    @OneToMany
    @Column(name = "medicines")
    private Set<Medicine> medicines;

    public Codebook() {
        super();
        this.dijagnoze = new HashSet<Diagnose>();
        this.medicines = new HashSet<Medicine>();
    }

    public Set<Diagnose> getDiagnoses() {
        return dijagnoze;
    }

    public void setDiagnoses(Set<Diagnose> dijagnoze) {
        this.dijagnoze = dijagnoze;
    }

    public Set<Medicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(Set<Medicine> medicines) {
        this.medicines = medicines;
    }
}
