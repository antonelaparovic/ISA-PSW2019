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
}
