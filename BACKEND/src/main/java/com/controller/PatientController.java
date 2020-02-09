package com.controller;


import com.model.Role;
import com.model.User;
import com.repository.PatientRepo;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.dtos.PatientDTO;
import com.model.Patient;
import com.model.PatientStatus;
import com.service.PatientService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/patient/register")
    public String Register(@RequestBody PatientDTO patient){

        Patient pat = patientService.getPatient(patient.getEmail());

        if(pat == null){
            Patient newPatient = new Patient();
            newPatient.setEmail(patient.getEmail());
            newPatient.setPassword(patient.getPassword());
            newPatient.setName(patient.getName());
            newPatient.setSurname(patient.getSurname());
            newPatient.setNumber(patient.getNumber());
            newPatient.setCity(patient.getCity());
            newPatient.setCountry(patient.getCountry());
            newPatient.setAddress(patient.getAddress());
            newPatient.setInsuranceID(patient.getInsuranceID());
            newPatient.setStatus(PatientStatus.APPROVED);

            boolean added=patientService.addPatient(newPatient);
            if(added == true){
                System.out.println("New account with email: " + newPatient.getEmail());
                User u = new User(patient.getEmail(), patient.getPassword(), Role.PATIENT);
                userService.save(u);
            }
            else
            {
                System.out.println("Email already exists: " + newPatient.getEmail());
            }

            return "";
        }
        else
            return "Email already exists";
    }

    @PostMapping(value = "/patient/edit")
    public String Edit(@RequestBody PatientDTO patient) {

        Patient pat = patientService.getPatient(patient.getEmail());
        User u = userService.getUser(pat.getEmail());

        if(pat != null){
            pat.setEmail(pat.getEmail());
            pat.setPassword(pat.getPassword());
            pat.setName(pat.getName());
            pat.setSurname(pat.getSurname());
            pat.setNumber(pat.getNumber());
            pat.setCity(pat.getCity());
            pat.setCountry(pat.getCountry());
            pat.setAddress(pat.getAddress());
            pat.setInsuranceID(pat.getInsuranceID());
            pat.setStatus(PatientStatus.APPROVED);
            u.setPassword(pat.getPassword());

            boolean editedPatient=patientService.editPatient(pat);
            boolean editedUser=userService.editUser(u);
            if(editedPatient==true || editedUser==true){
            System.out.println("Edit account with email:" + pat.getEmail());
            return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }


    @GetMapping(value = "patient/all")
    public ResponseEntity<List<Patient>> all() {
        return new ResponseEntity<>(patientService.findall(), HttpStatus.OK);
    }

}