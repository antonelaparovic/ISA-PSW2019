package com.model;

import javax.persistence.Entity;

@Entity
public class Nurse extends MedicalStaff{



    public Nurse(String firstName, String secondName, String password, String email, String address, String city, String state, String telephone, String uniqueNum, Long id, Clinic clinic) {
        super(firstName, secondName, password, email, address, city, state, telephone, uniqueNum, id, clinic);
    }
}
