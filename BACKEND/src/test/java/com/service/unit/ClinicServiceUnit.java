package com.service.unit;


import com.model.Clinic;
import com.repository.ClinicRepo;
import com.service.ClinicService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class ClinicServiceUnit{

    @Autowired
    private ClinicService clinicService;

    @MockBean
    private ClinicRepo clinicRepo;


    @BeforeEach
    public void setup() {

        Clinic clinic = new Clinic();
        clinic.setClinicRating(4.1);
        clinic.setName("Bolnica");
        clinic.setDescription("Opsta");
        clinic.setAddress("Novi Sad 1");
        clinic.setId(1L);
        when(
                clinicRepo.save(any(Clinic.class))
        ).thenReturn(
                clinic
        );

    }

    @Test
    public void getClinicTest() {
        Clinic clinic = new Clinic();
        clinic.setClinicRating(4.1);
        clinic.setName("Bolnica");
        clinic.setDescription("Opsta");
        clinic.setAddress("Novi Sad 1");
        clinic.setId(1L);

        Mockito.when(clinicRepo.findOneById(1L)).thenReturn(clinic);

        Clinic result = clinicRepo.findOneById(1L);

        assertNotNull(result);
        assertEquals(result.getId(), clinic.getId());
        assertEquals(result.getClinicRating(), clinic.getClinicRating());
    }

    @Test
    public void addClinicTest() throws Exception {

        Clinic clinic = new Clinic();
        clinic.setClinicRating(4.1);
        clinic.setName("Bolnica");
        clinic.setDescription("Opsta");
        clinic.setAddress("Novi Sad 1");

        Clinic result = clinicRepo.save(clinic);

        assertEquals(1L, result.getId());

    }
}