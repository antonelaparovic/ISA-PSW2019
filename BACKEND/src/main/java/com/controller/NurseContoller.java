package com.controller;

import com.dtos.NurseDTO;
import com.model.Nurse;
import com.service.NurseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class NurseController {
    @Autowired
    private NurseService nurseService;

    @PostMapping(value = "/nurse/edit")
    public String Edit(@RequestBody NurseDTO(nurse)) {

        Nurse doc = nurseService.getNurse(nurse.getEmail());
        if(doc != null){
            doc.setEmail(nurse.getEmail());
            doc.setPassword(nurse.getPassword());
            doc.setName(nurse.getName());
            doc.setSurname(nurse.getSurname());
            doc.setNumber(nurse.getNumber());

            boolean r(nurseService.editNurse(doc);
            if(r==true){
                System.out.println("Edit account with email:" + doc.getEmail());
                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }
}
