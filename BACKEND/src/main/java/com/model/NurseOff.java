package com.model;

import javax.persistence.*;

@Entity
public class NurseOff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private OffType type;

    @Enumerated(EnumType.STRING)
    private OffStatus status;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Nurse nurse;

    public NurseOff()
    {

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
}

