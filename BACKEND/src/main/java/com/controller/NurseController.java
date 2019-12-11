package com.controller;


import com.repository.NurseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.dtos.NurseDTO;
import com.model.Nurse;
import com.model.NurseStatus;
import com.service.NurseService;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class NurseController {

    @Autowired
    private NurseService nurseService;

    @PostMapping(value = "/nurse/register")
    public String Register(@RequestBody NurseDTO nurse){

        Nurse pat = nurseService.getNurse(nurse.getEmail());

        if(pat == null){
            Nurse newNurse = new Nurse();
            newNurse.setEmail(nurse.getEmail());
            newNurse.setPassword(nurse.getPassword());
            newNurse.setName(nurse.getName());
            newNurse.setSurname(nurse.getSurname());
            newNurse.setNumber(nurse.getNumber());
          //  newNurse.setCity(nurse.getCity());
          //  newNurse.setCountry(nurse.getCountry());
          //  newNurse.setAddress(nurse.getAddress());
          //  newNurse.setInsuranceID(nurse.getInsuranceID());
            newNurse.setStatus(NurseStatus.ACTIVE);

            nurseService.addNurse(newNurse);
            System.out.println("New account with email:" + newNurse.getEmail());
            return "";
        }
        else
            return "Email already exists";
    }

    @PostMapping(value = "/nurse/edit")
    public String Edit(@RequestBody NurseDTO nurse) {

        Nurse pat = nurseService.getNurse(nurse.getEmail());
        if(pat != null){
            pat.setEmail(nurse.getEmail());
            pat.setPassword(nurse.getPassword());
            pat.setName(nurse.getName());
            pat.setSurname(nurse.getSurname());
            pat.setNumber(nurse.getNumber());
         //   pat.setCity(nurse.getCity());
         //   pat.setCountry(nurse.getCountry());
         //   pat.setAddress(nurse.getAddress());
         //   pat.setInsuranceID(nurse.getInsuranceID());
            pat.setStatus(NurseStatus.ACTIVE);

            boolean r=nurseService.editNurse(pat);
            if(r==true){
                System.out.println("Edit account with email:" + pat.getEmail());
                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }

}