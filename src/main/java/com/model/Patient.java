package com.model;

public class Patient extends User {
    private MedicalRecord file;
    private Examination examination;

    public Patient() {
        super();
    }

    public Patient(MedicalRecord file, Examination examination) {
        this.file = file;
        this.examination = examination;
    }

    public MedicalRecord getFile() {
        return file;
    }

    public void setFile(MedicalRecord file) {
        this.file = file;
    }

    public Examination getExamination() {
        return examination;
    }

    public void setExamination(Examination examination) {
        this.examination = examination;
    }
}
