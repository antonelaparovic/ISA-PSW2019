package com.controller;

import com.dtos.ClinicAdministratorDTO;
import com.model.ClinicAdministrator;
import com.model.User;
import com.service.ClinicAdministratorService;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ClinicAdministratorController {
    @Autowired
    private ClinicAdministratorService clinicAdministratorService;

    @Autowired
    private UserService userService;

    @PostMapping(value = "/clinicadministrator/edit")
    public String Edit(@RequestBody ClinicAdministratorDTO clinicadministrator) {


        ClinicAdministrator cadmin = clinicAdministratorService.getClinicalAdministrator(clinicadministrator.getEmail());
        User u = userService.getUser(cadmin.getEmail());

        if(cadmin != null){
            cadmin.setEmail(clinicadministrator.getEmail());
            cadmin.setPassword(clinicadministrator.getPassword());
            cadmin.setName(clinicadministrator.getName());
            cadmin.setSurname(clinicadministrator.getSurname());
            cadmin.setPhone(clinicadministrator.getPhone());
            cadmin.setClinic(clinicadministrator.getClinic());

            boolean r=clinicAdministratorService.editClinicalAdministrator(cadmin);
            boolean editedUser=userService.editUser(u);
            boolean editedClinicAdministrator=clinicAdministratorService.editClinicalAdministrator(cadmin);
            if(editedClinicAdministrator==true || editedUser==true){
                System.out.println("Edit account with email:" + cadmin.getEmail());
                return "uspesno";}
            else{return "neuspesno";}
        }
        else
            return "Error edit account";

    }

    @GetMapping(value = "clinicadministrator/all")
    public ResponseEntity<List<ClinicAdministrator>> all() {
        return new ResponseEntity<>(clinicAdministratorService.findall(), HttpStatus.OK);
    }
}
