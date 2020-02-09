package com.controller;

import com.model.Clinic;
import com.service.ClinicService;
import com.service.ExaminationTypeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ClinicControllerTest {

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    ClinicService clinicService;
    @Autowired
    ExaminationTypeService examinationTypeService;

    @Test
    void getAllClinics(){
        ResponseEntity<List> response=testRestTemplate.getForEntity("/clinic/all", List.class);
        List<Clinic> clinics=response.getBody();
        assertEquals(clinics.size(),2);
        assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    void getClinicWithType(){
        ResponseEntity<List> response=testRestTemplate.getForEntity("/clinic/allWithTypes?type=Vadjenje krvi&date=2/21/2020",List.class);
        List<Clinic> clinics=response.getBody();
        assertEquals(clinics.size(),1);
        assertEquals(HttpStatus.OK,response.getStatusCode());
    }

    @Test
    void getClinicWithTypeBad(){
        ResponseEntity<List> response=testRestTemplate.getForEntity("/clinic/allWithTypes?type=&date=2/20/2020",List.class);
        List<Clinic> clinics=response.getBody();
        assertEquals(clinics.size(),0);
        assertEquals(HttpStatus.BAD_REQUEST,response.getStatusCode());
    }


}
