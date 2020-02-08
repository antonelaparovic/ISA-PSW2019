package com.dtos;

import com.model.Doctor;
import com.model.Interval;
import com.model.Nurse;
import com.model.OffStatus;
import com.model.OffType;

import javax.persistence.*;

public class TimeOffNUrseDTO {

    private OffType type;

    private OffStatus status;

    private Nurse nurse;

    private Interval interval;

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
