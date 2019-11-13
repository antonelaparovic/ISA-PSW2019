package com.model;

public class Nurse extends MedicalStaff{



    public Nurse(String firstName, String secondName, String password, String email, String address, String city, String state, String telephone, String uniqueNum, String id, Clinic clinic) {
        super(firstName, secondName, password, email, address, city, state, telephone, uniqueNum, id, clinic);
    }
}
