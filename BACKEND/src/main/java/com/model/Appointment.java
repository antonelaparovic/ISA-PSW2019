package com.model;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Appointment {
    private int id;
    private Date date;
    private String type;
    private Doctor doctor;
    private Patient patient;
    private boolean isFree;


}
