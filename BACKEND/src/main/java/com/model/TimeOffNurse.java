package com.model;

import javax.persistence.*;

@Entity
public class TimeOffNurse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private OffType type;

    @Enumerated(EnumType.STRING)
    private OffStatus status;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Interval interval;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Nurse nurse;


    public TimeOffNurse(OffType type, OffStatus status, Nurse nurse, Interval interval) {
        this.type = type;
        this.status = status;
        this.nurse = nurse;
        this.interval = interval;
    }

    public TimeOffNurse() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public OffType getType() {
        return type;
    }

    public void setType(OffType type) {
        this.type = type;
    }

    public OffStatus getStatus() {
        return status;
    }

    public void setStatus(OffStatus status) {
        this.status = status;
    }

    public Nurse getNurse() {
        return nurse;
    }

    public void setNurse(Nurse nurse) {
        this.nurse = nurse;
    }

    public Interval getInterval() {
        return interval;
    }

    public void setInterval(Interval interval) {
        this.interval = interval;
    }
}


