package com.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "interval")
public class Interval {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-mm-dd hh:mm")
    private LocalDateTime startTime;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-mm-dd hh:mm")
    private LocalDateTime endTime;

    @JsonIgnore
    @OneToMany(mappedBy = "interval", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<TimeOffDoctor> timeOffDoctorset = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "interval", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<TimeOffNurse> timeOffNurseset = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "interval", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Examination> examinations = new HashSet<>();


    public Interval() {
    }

    public Interval(LocalDateTime start, LocalDateTime end) {
        this.startTime = start;
        this.endTime = end;
        this.timeOffDoctorset = new HashSet<>();
        this.timeOffNurseset = new HashSet<>();
        this.examinations = new HashSet<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime start) {
        this.startTime = start;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime end) {
        this.endTime = end;
    }

    public Set<TimeOffDoctor> getTimeOffDoctorset() {
        return timeOffDoctorset;
    }

    public Set<TimeOffNurse> getTimeOffNurseset() {
        return timeOffNurseset;
    }
    public void setTimeOffDoctorset(Set<TimeOffDoctor> timeOffDoctorset) {
        this.timeOffDoctorset = timeOffDoctorset;
    }

    public void setTimeOffNurseset(Set<TimeOffNurse> timeOffNurseset) {
        this.timeOffNurseset = timeOffNurseset;
    }

    public Set<Examination> getExaminations() {
        return examinations;
    }

    public void setExaminations(Set<Examination> examinations) {
        this.examinations = examinations;
    }
}
