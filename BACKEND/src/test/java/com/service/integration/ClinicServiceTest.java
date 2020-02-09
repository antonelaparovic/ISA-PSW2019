package com.service.integration;


import com.model.Clinic;
import com.repository.ClinicRepo;
import com.service.ClinicService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ClinicServiceTest {
    @Autowired
    private ClinicService clinicService;

    @Autowired
    private ClinicRepo clinicRepo;

    @BeforeEach
    void setUp() {
    }

    @Test
    void findAll(){
        List<Clinic> clinics=clinicService.findAll();
        assertEquals(clinics.size(),2);
    }

    @Test
    @Rollback
    void findOneById() {
        Clinic c = clinicService.findOneById(100L);
        assertNotNull(c);

        assertEquals(c.getName(), "MediaGroup");
        assertEquals(c.getAddress(), "Novi sad 123");
        assertEquals(c.getDescription(), "Odlicna");
        assertEquals(c.getClinicRating(), 4.4);
    }

    @Test
    @Rollback
    @Transactional
    void save() {
        Clinic c = clinicService.findOneById(100L);
        c.setName("Test");
        clinicRepo.save(c);
        Clinic c1 = clinicService.findOneById(100L);

        assertEquals(c1.getName(), c.getName());

    }

    @Test
    @Rollback
    @Transactional
    void addClinic() {
        Clinic c = new Clinic();
        c.setName("Test");
        c.setAddress("Novi sad 123");
        c.setDescription("Testiramo da li radi");
        c.setClinicRating(4.0);

        boolean flag = clinicService.addClinic(c);

        assertEquals(flag, true);

        Clinic c1 = clinicService.getClinic("Test");

        assertNotNull(c1);
        assertEquals(c1.getId(), c.getId());

    }
}
