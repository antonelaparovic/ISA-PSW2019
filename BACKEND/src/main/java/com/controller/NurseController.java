package com.controller;


import com.dtos.NurseDTO;
import com.model.Nurse;
import com.model.Role;
import com.model.User;
import com.service.NurseService;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class NurseController {


    @Autowired
    private NurseService nurseService;

    @Autowired
    private UserService userService;

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
            newNurse.setCity(nurse.getCity());
            newNurse.setCountry(nurse.getCountry());
            newNurse.setAddress(nurse.getAddress());


            boolean added=nurseService.addNurse(newNurse);
            if(added == true){
                System.out.println("New account with email: " + newNurse.getEmail());
                User u = new User(nurse.getEmail(), nurse.getPassword(), Role.PATIENT);
                userService.save(u);
            }
            else
            {
                System.out.println("Email already exists: " + newNurse.getEmail());
            }

            return "";
        }
        else
            return "Email already exists";
    }

    @PostMapping(value = "/nurse/edit")
    public String Edit(@RequestBody NurseDTO nurse) {

        Nurse pat = nurseService.getNurse(nurse.getEmail());
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

            u.setPassword(pat.getPassword());

            boolean editedNurse=nurseService.editNurse(pat);
            boolean editedUser=userService.editUser(u);
            if(editedNurse==true || editedUser==true){
                System.out.println("Edit account with email:" + pat.getEmail());

                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }



    @GetMapping(value = "nurse/all")
    public ResponseEntity<List<Nurse>> all() {
        return new ResponseEntity<>(nurseService.findall(), HttpStatus.OK);
    }

}
