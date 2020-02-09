package com.controller;

import com.model.MedicalRecord;
import com.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class MedicalRecordController {

    @Autowired
    MedicalRecordService medicalRecordService;

    @GetMapping(value = "medicalRecord/all")
    public ResponseEntity<List<MedicalRecord>> allMedicalRecords() {
        return new ResponseEntity<>(medicalRecordService.findAll(), HttpStatus.OK);
    }


}
