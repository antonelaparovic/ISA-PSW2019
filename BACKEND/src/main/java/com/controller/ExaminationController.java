package com.controller;

import com.model.Examination;
import com.service.ExaminationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ExaminationController {

        @Autowired
        ExaminationService examinationService;

        @GetMapping(value = "examination/all")
        public ResponseEntity<List<Examination>> all() {
            return new ResponseEntity<>(examinationService.findAll(), HttpStatus.OK);
        }
    }

