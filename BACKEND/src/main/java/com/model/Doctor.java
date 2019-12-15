package com.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Doctor  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String name;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String surname;

    @Column(columnDefinition = "VARCHAR(11)", unique = true, nullable = false)
    private String number;


    @Column(columnDefinition = "VARCHAR(50)", nullable = false)
    private String address;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String country;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String city;

    @Column(columnDefinition = "VARCHAR(30)", nullable = false)
    private String specialization;


    @JsonFormat(pattern = "HH:mm")
    @NotNull
    @Column(nullable = false)
    private LocalTime workHoursFrom;

    @JsonFormat(pattern = "HH:mm")
    @NotNull
    @Column(nullable = false)
    private LocalTime workHoursTo;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private Clinic clinic;

    @JsonIgnore
    @ManyToMany(mappedBy = "doctors")
    private Set<Examination> examinations = new HashSet<Examination>();

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private ExaminationType specialized;

    @JsonManagedReference
    @OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<DoctorOff> timeOffDoctors = new HashSet<>();

    @Enumerated(EnumType.STRING)
    private DoctorStatus status;

    @Column
    private Integer doctorRating;

    public Doctor(){

    }

    public Doctor(Long id,String email, String password, String name, String surname, String number,String address, String country, String city, String specialization, LocalTime workHoursFrom, LocalTime workHoursTo, Clinic clinic, ExaminationType specialized, DoctorStatus status) {
        this.id=id;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.number = number;
        this.address = address;
        this.country = country;
        this.city = city;
        this.specialization = specialization;
        this.workHoursFrom = workHoursFrom;
        this.workHoursTo = workHoursTo;
        this.clinic = clinic;
        this.specialized = specialized;
        this.status = status;
        this.timeOffDoctors=new HashSet<>();
        this.examinations=new HashSet<Examination>();
        this.doctorRating=0;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public LocalTime getWorkHoursFrom() {
        return workHoursFrom;
    }

    public void setWorkHoursFrom(LocalTime workHoursFrom) {
        this.workHoursFrom = workHoursFrom;
    }

    public LocalTime getWorkHoursTo() {
        return workHoursTo;
    }

    public void setWorkHoursTo(LocalTime workHoursTo) {
        this.workHoursTo = workHoursTo;
    }

    public Clinic getClinic() {
        return clinic;
    }

    public void setClinic(Clinic clinic) {
        this.clinic = clinic;
    }

    public Set<Examination> getExaminations() {
        return examinations;
    }

    public void setExaminations(Set<Examination> examinations) {
        this.examinations = examinations;
    }

    public ExaminationType getSpecialized() {
        return specialized;
    }

    public void setSpecialized(ExaminationType specialized) {
        this.specialized = specialized;
    }

    public Set<DoctorOff> getTimeOffDoctors() {
        return timeOffDoctors;
    }

    public void setTimeOffDoctors(Set<DoctorOff> timeOffDoctors) {
        this.timeOffDoctors = timeOffDoctors;
    }

    public DoctorStatus getStatus() {
        return status;
    }

    public void setStatus(DoctorStatus status) {
        this.status = status;
    }


    public Integer getDoctorRating() {
        return doctorRating;
    }

    public void setDoctorRating(Integer doctorRating) {
        this.doctorRating = doctorRating;
    }

}
