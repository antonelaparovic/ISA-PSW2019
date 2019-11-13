package com.model;

import java.util.ArrayList;
import java.util.HashMap;

public class Clinic {

    private String id;
    private String name;
    private String address;
    private HashMap<Appointment,Integer> price;
    private ArrayList<Doctor> doctors;
    private ArrayList<Nurse> nurses;
    private ArrayList<Patient> patients;
    private double averageRating;

    public Clinic() {
    }

    public Clinic(String id, String name, String address, HashMap<Appointment, Integer> price, ArrayList<Doctor> doctors, ArrayList<Nurse> nurses, ArrayList<Patient> patients, double averageRating) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.price = price;
        this.doctors = doctors;
        this.nurses = nurses;
        this.patients = patients;
        this.averageRating = averageRating;
    }
}
