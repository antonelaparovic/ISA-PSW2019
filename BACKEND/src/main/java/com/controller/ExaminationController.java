package com.controller;

import com.model.*;
import com.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class ExaminationController {

        @Autowired
        ExaminationService examinationService;

        @Autowired
        PatientService patientService;

        @Autowired
        DoctorService doctorService;

        @Autowired
        ClinicService clinicService;

        @Autowired
        ExaminationTypeService examinationTypeService;

        @GetMapping(value = "examination/all")
            public ResponseEntity<List<Examination>> all() {
                return new ResponseEntity<>(examinationService.findAll(), HttpStatus.OK);
            }

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
        public ResponseEntity<Boolean> makePredefExamination(@RequestParam(value = "id", required = true) String id,
                                                             @RequestParam(value = "email", required = true) String email) {
            Examination e = new Examination();
            Long idEx = Long.parseLong(id);
            e = examinationService.findOneById(idEx);
            Patient p = patientService.getPatient(email);

            boolean uspesno = examinationService.editPredefBooked(e,p);
            this.examinationService.SendEmailPredef(e,p);
            if(uspesno == true)
                return new ResponseEntity<>(true, HttpStatus.OK);
            else
                return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }


    @PostMapping(value = "/examination/addExamination")
    public ResponseEntity<Boolean> addExamination(@RequestParam(value = "date", required = true) String date,
                                                         @RequestParam(value = "patientEmail", required = true) String patientEmail,
                                                         @RequestParam(value = "doctorEmail", required = true) String doctorEmail,
                                                         @RequestParam(value = "type", required = true) String type,
                                                         @RequestParam(value = "clinicId", required = true) String clinicId,
                                                         @RequestParam(value = "kind", required = true) String kind){

        Doctor doctor = doctorService.getDoctor(doctorEmail);
        Patient patient = patientService.getPatient(patientEmail);
        Clinic clinic = clinicService.findOneById(Long.parseLong(clinicId));

        if(patient == null || doctor == null || clinic == null) {
            return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
        }

        ExaminationType examinationType = examinationTypeService.findByName(type);
        Interval interval = new Interval();
        Examination e = new Examination();
        Set<Doctor> doctors = new HashSet<Doctor>();

        String[] parts = date.split(" ");
        String[] datum = parts[0].split("-");
        String[] vreme = parts[1].split(":");

        int godina = Integer.parseInt(datum[0]);
        int mesec = Integer.parseInt(datum[1]);
        int dan = Integer.parseInt(datum[2]);
        int sat = Integer.parseInt(vreme[0]);
        int minut = Integer.parseInt(vreme[1]);

        interval.setStartTime(LocalDateTime.of(godina,mesec,dan,sat,minut));
        interval.setEndTime(LocalDateTime.of(godina,mesec,dan,sat+1,minut));
        e.setStatus(ExaminationStatus.AWAITING);
        e.setPatient(patient);
        e.setExaminationType(examinationType);
        e.setClinic(clinic);
        doctors.add(doctor);
        e.setDoctors(doctors);
        e.setInterval(interval);

        if(kind.equals("Examination")) {
            e.setKind(ExaminationKind.EXAMINATION);
        }else
            e.setKind(ExaminationKind.OPERATION);

        examinationService.addExamination(e);
        this.examinationService.awaitingExamination(e,patient);
        return new ResponseEntity<>(true, HttpStatus.CREATED);
    }


}

