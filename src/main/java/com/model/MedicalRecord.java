package com.model;


public class MedicalRecord {
    private Patient patient;
    private String id;
    private String history;
    private Doctor doctor;

    public MedicalRecord() {
    }

    public MedicalRecord(Patient patient, String id, String history, Doctor doctor) {
        this.patient = patient;
        this.id = id;
        this.history = history;
        this.doctor = doctor;
    }
}
