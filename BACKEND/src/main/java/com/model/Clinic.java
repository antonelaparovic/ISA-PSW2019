package com.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Clinic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "VARCHAR(50)",nullable = false)
    private String name;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private double clinicRating;

    @JsonIgnore
    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Examination> examinations=new HashSet<>();


    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Doctor> doctors=new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Nurse> nurses=new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<Room> rooms=new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "clinic", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<ClinicAdministrator> clinicAdministrators=new HashSet<>();


    @OneToMany(mappedBy = "clinic", fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Set<ExaminationType> examinationTypes=new HashSet<>();



    public Clinic() {
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getDescription() {
        return description;
    }

    public Set<Examination> getExaminations() {
        return examinations;
    }

    public Set<Doctor> getDoctors() {
        return doctors;
    }

    public Set<Nurse> getNurses() {
        return nurses;
    }

    public Set<Room> getRooms() {
        return rooms;
    }

    public Set<ClinicAdministrator> getClinicAdministrators() {
        return clinicAdministrators;
    }

    public Set<ExaminationType> getExaminationTypes() {
        return examinationTypes;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setExaminations(Set<Examination> examinations) {
        this.examinations = examinations;
    }

    public void setDoctors(Set<Doctor> doctors) {
        this.doctors = doctors;
    }

    public void setNurses(Set<Nurse> nurses) {
        this.nurses = nurses;
    }

    public void setRooms(Set<Room> rooms) {
        this.rooms = rooms;
    }

    public void setClinicAdministrators(Set<ClinicAdministrator> clinicAdministrators) {
        this.clinicAdministrators = clinicAdministrators;
    }

    public void setExaminationTypes(Set<ExaminationType> examinationTypes) {
        this.examinationTypes = examinationTypes;
    }

    @Override
    public String toString() {
        return "Clinic{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", description='" + description + '\'' +
                ", clinicRating=" + clinicRating +
                ", examinations=" + examinations +
                ", doctors=" + doctors +
                '}';
    }

    public double getClinicRating() {
        return clinicRating;
    }

    public void setClinicRating(double clinicRating) {
        this.clinicRating = clinicRating;
    }
}
