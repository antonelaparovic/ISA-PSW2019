package com.controller;

import com.dtos.DoctorDTO;
import com.model.Doctor;
import com.model.User;
import com.service.DoctorService;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class DoctorController {
    @Autowired
    private DoctorService doctorService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/doctor/edit")
    public String Edit(@RequestBody DoctorDTO doctor) {


        Doctor doc = doctorService.getDoctor(doctor.getEmail());
        User u = userService.getUser(doc.getEmail());

        if(doc != null){
            doc.setEmail(doctor.getEmail());
            doc.setPassword(doctor.getPassword());
            doc.setName(doctor.getName());
            doc.setSurname(doctor.getSurname());
            doc.setNumber(doctor.getNumber());
            doc.setAddress(doctor.getAddress());
            doc.setCity(doctor.getCity());
            doc.setCountry(doctor.getCountry());
            doc.setSpecialization(doctor.getSpecialization());

            boolean r=doctorService.editDoctor(doc);
            boolean editedUser=userService.editUser(u);
            boolean editedDoctor=doctorService.editDoctor(doc);
            if(editedDoctor==true || editedUser==true){
                System.out.println("Edit account with email:" + doc.getEmail());
                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }

    @GetMapping(value = "doctor/all")
    public ResponseEntity<List<Doctor>> all() {
        return new ResponseEntity<>(doctorService.findall(), HttpStatus.OK);
    }
}
