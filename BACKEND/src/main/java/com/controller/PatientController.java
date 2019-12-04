package com.controller;


import com.repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.dtos.PatientDTO;
import com.model.Patient;
import com.model.PatientStatus;
import com.service.PatientService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class PatientController {

    @Autowired
    private PatientService patientService;

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

            patientService.addPatient(newPatient);
            System.out.println("New account with email:" + newPatient.getEmail());
            return "";
        }
        else
            return "Email already exists";
    }

    @PostMapping(value = "/patient/edit")
    public String Edit(@RequestBody PatientDTO patient) {

        Patient pat = patientService.getPatient(patient.getEmail());
        if(pat != null){
            pat.setEmail(patient.getEmail());
            pat.setPassword(patient.getPassword());
            pat.setName(patient.getName());
            pat.setSurname(patient.getSurname());
            pat.setNumber(patient.getNumber());
            pat.setCity(patient.getCity());
            pat.setCountry(patient.getCountry());
            pat.setAddress(patient.getAddress());
            pat.setInsuranceID(patient.getInsuranceID());
            pat.setStatus(PatientStatus.APPROVED);

            boolean r=patientService.editPatient(pat);
            if(r==true){
            System.out.println("Edit account with email:" + pat.getEmail());
            return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }

}