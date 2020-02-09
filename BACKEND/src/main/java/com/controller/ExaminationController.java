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
        @GetMapping(value = "/examination/allPredefExaminations")
        public ResponseEntity<List<Examination>> allPredefExaminations() {
            List<Examination> pom = examinationService.findAll();
            List<Examination> ret = new ArrayList<>();

            for(Examination e : pom)
            {
                if(e.getStatus() == ExaminationStatus.PREDEF_AVAILABLE)
                    {
                    ret.add(e);
                    }
            }

            return new ResponseEntity<>(ret, HttpStatus.OK);
        }

        @PostMapping(value = "/examination/makePredefExamination")
        public ResponseEntity<Examination> makePredefExamination(@RequestParam(value = "id", required = true) String id,
                                                             @RequestParam(value = "email", required = true) String email) {
            Examination e = new Examination();
            Long idEx = Long.parseLong(id);
            e = examinationService.findOneById(idEx);
            Patient p = patientService.getPatient(email);

            boolean uspesno = examinationService.editPredefBooked(e,p);
            this.examinationService.SendEmailPredef(e,p);
            if(uspesno == true)
                return new ResponseEntity<>(e, HttpStatus.OK);
            else
                return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
        }
    }

