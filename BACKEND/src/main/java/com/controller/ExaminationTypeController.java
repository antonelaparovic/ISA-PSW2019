package com.controller;

import com.model.ExaminationType;
import com.service.ExaminationTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ExaminationTypeController {

    @Autowired
    ExaminationTypeService examinationTypeService;

    @GetMapping(value = "examination-type/all")
    public ResponseEntity<List<ExaminationType>> all() {
        return new ResponseEntity<>(examinationTypeService.findAll(), HttpStatus.OK);
    }
}
