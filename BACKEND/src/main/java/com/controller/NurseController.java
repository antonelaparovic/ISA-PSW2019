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

    @PostMapping(value = "/nurse/edit")
    public String Edit(@RequestBody NurseDTO nurse) {


        Nurse doc = nurseService.getNurse(nurse.getEmail());
        User u = userService.getUser(doc.getEmail());

        if(doc != null){
            doc.setEmail(nurse.getEmail());
            doc.setPassword(nurse.getPassword());
            doc.setName(nurse.getName());
            doc.setSurname(nurse.getSurname());
            doc.setNumber(nurse.getNumber());
            doc.setAddress(nurse.getAddress());
            doc.setCity(nurse.getCity());
            doc.setCountry(nurse.getCountry());


            boolean r=nurseService.editNurse(doc);
            boolean editedUser=userService.editUser(u);
            boolean editedNurse=nurseService.editNurse(doc);
            if(editedNurse==true || editedUser==true){
                System.out.println("Edit account with email:" + doc.getEmail());
                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }

    @GetMapping(value = "doctor/all")
    public ResponseEntity<List<Nurse>> all() {
        return new ResponseEntity<>(nurseService.findall(), HttpStatus.OK);
    }
}
