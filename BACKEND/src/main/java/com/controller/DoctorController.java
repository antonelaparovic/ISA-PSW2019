package com.controller;

import com.dtos.DoctorDTO;
import com.model.Doctor;
import com.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @PostMapping(value = "/doctor/edit")
    public String Edit(@RequestBody DoctorDTO doctor) {

        Doctor doc = doctorService.getDoctor(doctor.getEmail());
        if(doc != null){
            doc.setEmail(doctor.getEmail());
            doc.setPassword(doctor.getPassword());
            doc.setName(doctor.getName());
            doc.setSurname(doctor.getSurname());
            doc.setNumber(doctor.getNumber());

            boolean r=doctorService.editDoctor(doc);
            if(r==true){
                System.out.println("Edit account with email:" + doc.getEmail());
                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }
}
