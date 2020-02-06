package com.controller;


import com.dtos.ClinicalCenterAdministratorDTO;
import com.model.ClinicalCenterAdministrator;
import com.model.Role;
import com.model.User;

import com.service.ClinicalCenterAdministratorService;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})

public class ClinicalCenterAdministratorController {

    @Autowired
    private ClinicalCenterAdministratorService ccAdminService;

    @Autowired
    private UserService userService;


    @PostMapping(value = "/clinicalCenterAdministrator/edit")
    public String Edit(@RequestBody ClinicalCenterAdministratorDTO ccAdmin) {

        ClinicalCenterAdministrator pat = ccAdminService.getCCAdmin(ccAdmin.getEmail());
        User u = userService.getUser(pat.getEmail());

        if(pat != null){
            pat.setEmail(pat.getEmail());
            pat.setPassword(pat.getPassword());
            pat.setName(pat.getName());
            pat.setSurname(pat.getSurname());
            pat.setNumber(pat.getNumber());
            u.setPassword(pat.getPassword());

            boolean editedCC=ccAdminService.editCCAdmin(pat);
            boolean editedUser=userService.editUser(u);
            if(editedCC==true || editedUser==true){
                System.out.println("Edit account with email:" + pat.getEmail());
                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }


    @GetMapping(value = "clinicalCenterAdministrator/all")
    public ResponseEntity<List<ClinicalCenterAdministrator>> all() {
        return new ResponseEntity<>(ccAdminService.findall(), HttpStatus.OK);
    }

}
