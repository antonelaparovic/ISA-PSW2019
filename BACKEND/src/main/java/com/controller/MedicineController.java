package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dtos.MedicineDTO;
import com.model.Medicine;
import com.service.MedicineService;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @PostMapping(value = "/medicine/edit")
    public String editNurse(@RequestBody MedicineDTO m){

        Medicine med = medicineService.getMedicine(m.getId());

        if(med != null)
        {
            med.setId(m.getId());
            med.setTitle(m.getTitle());
            med.setDescription(m.getDescription());
            med.setStrenght(m.getStrenght());



            boolean uspesno = medicineService.editMedicine(med);

            if(uspesno == true) {
                System.out.println("Medicine with id: " + med.getId() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }

        }
        else
        {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }

    @GetMapping(value = "/medicine/getAllMedicines")
    public ResponseEntity<List<Medicine>> all() {
        return new ResponseEntity<>(medicineService.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/medicine/clinicalCenterAdministrator/addMedicine")
    public String addMedicine(@RequestBody MedicineDTO m){

        Medicine med = medicineService.getMedicine(m.getId());
        if(med == null){
            Medicine newMedicine = new Medicine();
            newMedicine.setId(m.getId());
            newMedicine.setTitle(m.getTitle());
            newMedicine.setDescription(m.getDescription());
            newMedicine.setStrenght(m.getStrenght());


            boolean uspesno = medicineService.addMedicine(newMedicine);
            if(uspesno == true){
                System.out.println("New medicine with id " + newMedicine.getId() + " is added.");
            }
            else
            {
                System.out.println("Medicine already exists: " + newMedicine.getId());
            }

            return "";
        }
        else
            return "Diagnose already exists";
    }
}
