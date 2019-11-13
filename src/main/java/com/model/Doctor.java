package com.model;

import java.util.ArrayList;

public class Doctor extends MedicalStaff {
    private ArrayList<Appointment> examinations;
    private ArrayList<Appointment> operations;

    public Doctor() {
        super();
    }
}
