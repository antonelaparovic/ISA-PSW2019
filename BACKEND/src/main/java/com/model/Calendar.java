package com.model;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.model.User;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "calendar")



public class Calendar {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @Column(name = "workingtimestart")
    private Integer workingTimeStart;

    @Column(name = "workingtimeend")
    private Integer workingTimeEnd;

    @Column(name = "holiday")
    private Date holiday;

    @Column(name = "holidayduration")
    private int holidayDuration;

    @ElementCollection
    @Column(name = "absence")
    private Set<Date> absence = new HashSet<Date>();



    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name = "availableExaminations")
    @JsonIgnore
    private Set<Examination> availableExaminations;

    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @Column(name = "occupiedExaminations")
    @JsonIgnore
    private Set<Examination> occupiedExaminations;

    public Calendar() {}

    public Calendar(Long id, User staff, Integer workingTimeStart, Integer workingTimeEnd, Date holiday,
                    int holidayDuration, Set<Date> absence, Set<Examination> examinations) {
        super();
        this.id = id;

        this.workingTimeStart = workingTimeStart;
        this.workingTimeEnd = workingTimeEnd;
        this.holiday = holiday;
        this.holidayDuration = holidayDuration;
        this.absence = absence;
    }

    public Calendar(Long id, User staff, Integer workingTimeStart, Integer workingTimeEnd, Date holiday,
                    int holidayDuration) {
        super();
        this.id = id;

        this.workingTimeStart = workingTimeStart;
        this.workingTimeEnd = workingTimeEnd;
        this.holiday = holiday;
        this.holidayDuration = holidayDuration;
    }


    public Calendar(Long id, Integer radnoVremePoc, Integer radnoVremeKraj, Date godisnjiOdmor, int trajanjeGodisnjegOdmora,
                    Set<Date> odsustva, Set<Examination> slobodniPregledi, Set<Examination> zauzetiPregledi) {
        super();
        this.id = id;
        this.workingTimeStart = radnoVremePoc;
        this.workingTimeStart = radnoVremeKraj;
        this.holiday = godisnjiOdmor;
        this.holidayDuration = trajanjeGodisnjegOdmora;
        this.absence = odsustva;
        this.availableExaminations = slobodniPregledi;
        this.occupiedExaminations = zauzetiPregledi;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Integer getWorkingTimeStart() {
        return workingTimeStart;
    }

    public void setWorkingTimeStart(Integer workingTimeStart) {
        this.workingTimeStart = workingTimeStart;
    }

    public Integer getWorkingTimeEnd() {
        return workingTimeEnd;
    }

    public void setWorkingTimeEnd(Integer workingTimeEnd) {
        this.workingTimeEnd = workingTimeEnd;
    }

    public Date getHoliday() {
        return holiday;
    }

    public void setHoliday(Date holiday) {
        this.holiday = holiday;
    }

    public int getHolidayDuration() {
        return holidayDuration;
    }

    public void setHolidayDuration(int holidayDuration) {
        this.holidayDuration = holidayDuration;
    }

    public Set<Date> getAbsence() {
        return absence;
    }

    public void setAbsence(Set<Date> absence) {
        this.absence = absence;
    }

    public Set<Examination> getAvailableExaminations() {
        return availableExaminations;
    }

    public void setAvailableExaminations(Set<Examination> availableExaminations) {
        this.availableExaminations = availableExaminations;
    }

    public Set<Examination> getOccupiedExaminations() {
        return occupiedExaminations;
    }

    public void setOccupiedExaminations(Set<Examination> occupiedExaminations) {
        this.occupiedExaminations = occupiedExaminations;
    }


}

