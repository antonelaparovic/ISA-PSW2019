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

    @PostMapping(value = "clinicadministrator/edit")
    public String editClinicAdministrator(@RequestBody ClinicAdministratorDTO d){
        ClinicAdministrator doct = clinicAdministratorService.getClinicAdministrator(d.getEmail());
        User u = userService.getUser(d.getEmail());

        if(doct != null){
            doct.setEmail(d.getEmail());
            doct.setPassword(d.getPassword());
            doct.setName(d.getName());
            doct.setSurname(d.getSurname());
            doct.setNumber(d.getNumber());
            doct.setClinic(d.getClinic());
            u.setPassword(d.getPassword());

            boolean uspesno = clinicAdministratorService.editClinicAdministrator(doct);
            boolean uspesno2 = userService.editUser(u);

            if(uspesno == true || uspesno2 == true) {
                System.out.println("User with email: " + doct.getEmail() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }
        }
        else {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }

    @GetMapping(value = "clinicadministrator/all")
    public ResponseEntity< List<ClinicAdministrator>> all() {
        return new ResponseEntity<>(clinicAdministratorService.findall(), HttpStatus.OK);
    }
}
