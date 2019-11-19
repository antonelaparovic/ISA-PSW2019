package com.model;

import javax.persistence.Entity;

@Entity
public class MedicalStaff extends User{
    private Clinic clinic;

    public MedicalStaff(){
        super();
    }

    public MedicalStaff(Clinic clinic) {
        this.clinic = clinic;
    }

    public MedicalStaff(String firstName, String secondName, String password, String email, String address, String city, String state, String telephone, String uniqueNum, String id, Clinic clinic) {
        super(firstName, secondName, password, email, address, city, state, telephone, uniqueNum, id);
        this.clinic = clinic;
    }
}
