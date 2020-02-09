package com.controller;


import com.model.Examination;
import com.model.Patient;
import com.service.*;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.test.annotation.Rollback;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExaminationControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

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

    @Test
    void getAllExaminations(){
        ResponseEntity<List> response=testRestTemplate.getForEntity("/examination/all", List.class);
        List<Examination> clinics=response.getBody();
        assertEquals(clinics.size(),12);
        assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    void getAllPredefinedExaminations(){
        ResponseEntity<List> response=testRestTemplate.getForEntity("/examination/allPredefExaminations", List.class);
        List<Examination> clinics=response.getBody();
        assertEquals(clinics.size(),8);
        assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    void makePredefExamination() throws Exception{
        Patient patient=patientService.getPatient("patienttim27@gmail.com");
        Examination examination=examinationService.findOneById(201L);
        ResponseEntity<Boolean> responseEntity=testRestTemplate.postForEntity("/examination/makePredefExamination?id=201&email=patienttim27@gmail.com",null,Boolean.class);
        Boolean flag=responseEntity.getBody();
        assertEquals(flag,true);
        assertEquals(HttpStatus.OK,responseEntity.getStatusCode());
    }

    @Test
    void makePredefExaminationBad() throws Exception{
        Patient patient=patientService.getPatient("patienttim27@gmail.com");
        Examination examination=examinationService.findOneById(100L);
        ResponseEntity<Boolean> responseEntity=testRestTemplate.postForEntity("/examination/makePredefExamination?id=100&email=patienttim27@gmail.com",null,Boolean.class);
        Boolean flag=responseEntity.getBody();
        assertEquals(flag,false);
        assertEquals(HttpStatus.BAD_REQUEST,responseEntity.getStatusCode());
    }

    @Test
    void addExamination() throws Exception{
        ResponseEntity<Boolean> response=testRestTemplate.postForEntity("/examination/addExamination?date=2020-02-20 15:00&patientEmail=patienttim27@gmail.com&doctorEmail=doctor@email.com&type=Pregled ociju&clinicId=100&kind=Examination", null ,Boolean.class);
        Boolean flag=response.getBody();
        assertEquals(flag,true);
        assertEquals(HttpStatus.CREATED,response.getStatusCode());
    }

    @Test
    void addExaminationBad() throws Exception{
        ResponseEntity<Boolean> response=testRestTemplate.postForEntity("/examination/addExamination?date=2020-02-20 09:00&patientEmail=patienttim27@gmail.com&doctorEmail=doctor@email.com&type=Pregled ociju&clinicId=350&kind=Examination", null ,Boolean.class);
        Boolean flag=response.getBody();
        assertEquals(flag,false);
        assertEquals(HttpStatus.BAD_REQUEST,response.getStatusCode());
    }
}
