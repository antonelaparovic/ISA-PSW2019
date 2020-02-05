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
    private Set<Diagnose> diagnoses;

    @OneToMany
    @Column(name = "medicines")
    private Set<Medicine> medicines;

    public Codebook() {
        super();
        this.diagnoses = new HashSet<Diagnose>();
        this.medicines = new HashSet<Medicine>();
    }

    public Set<Diagnose> getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(Set<Diagnose> dijagnoze) {
        this.diagnoses = dijagnoze;
    }

    public Set<Medicine> getMedicines() {
        return medicines;
    }

    public void setMedicines(Set<Medicine> medicines) {
        this.medicines = medicines;
    }
}
