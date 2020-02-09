package com.controller;


import com.model.Clinic;
import com.model.Doctor;
import com.model.ExaminationType;
import com.service.ClinicService;
import com.service.ExaminationTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ClinicController{

    @Autowired
    ClinicService clinicService;
    @Autowired
    ExaminationTypeService examinationTypeService;

    @GetMapping(value = "/clinic/all")
    public ResponseEntity<List<Clinic>> all() {
        for (Clinic var : clinicService.findAll())
        {
            System.out.println(var);
        }
        return new ResponseEntity<>(clinicService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/clinic/allWithTypes")
    public ResponseEntity<List<Clinic>> allWithType(@RequestParam(value = "type", required = true) String type,
                                                    @RequestParam(value = "date", required = true) String date) {

        List<Clinic> tmp = new ArrayList<>();

        if(type.equals("") || date.equals("")) {
            return new ResponseEntity<>(tmp, HttpStatus.BAD_REQUEST);
        }

        List<ExaminationType> types = examinationTypeService.findAll();
        for (ExaminationType t : types) {

            if(t.getLabel().equals(type)) {
                tmp.add(t.getClinic());
            }

        }

        String[] parts = date.split("/");
        int year = Integer.parseInt(parts[2]);
        int day = Integer.parseInt(parts[1]);
        int month = Integer.parseInt(parts[0]);
        LocalDateTime datetime = LocalDateTime.of(year,month,day,0,0);
        System.out.println(datetime);

        for (Clinic c : tmp) {

            for(Doctor d : c.getDoctors()) {
                if(d.getSpecialized().getLabel().equals(type)) {
                    System.out.println(c.getDoctors());
                }
                else
                    c.getDoctors().remove(d);
            }
        }

        System.out.println(tmp.size());

        return new ResponseEntity<>(tmp, HttpStatus.OK);
    }
}
