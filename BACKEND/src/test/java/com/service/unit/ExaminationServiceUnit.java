package com.service.unit;

import com.model.*;
import com.repository.DoctorRepo;
import com.repository.ExaminationRepo;
import com.repository.ExaminationTypeRepo;
import com.repository.PatientRepo;
import com.service.ClinicService;
import com.service.ExaminationService;
import com.service.PatientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExaminationServiceUnit{

    @Autowired
    private ExaminationService examinationService;

    @Autowired
    private PatientService patientService;

    @Autowired
    private ClinicService clinicService;

    @MockBean
    private ExaminationRepo examinationRepo;

    @MockBean
    private ExaminationTypeRepo examinationTypeRepo;

    @MockBean
    private PatientRepo patientRepo;

    @MockBean
    private DoctorRepo doctorRepo;


    @BeforeEach
    public void setup() {

        Examination examination = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);
        Patient p1 = new Patient(1L,"patienttim27@gmail.com","Password123","Patient","Patientic","147258589","Adresa",
                "Drzava", "Grad", "11111111111");
        examination.setKind(ExaminationKind.EXAMINATION);
        examination.setPatient(p1);
        examination.setStatus(ExaminationStatus.APPROVED);
        examination.setClinic(clinicService.getClinic("MediaGroup"));
        examination.setInterval(i);
        examination.setDiscount(20);
        examination.setDoctorRating(0);
        examination.setClinicRating(0);
        examination.setId(1L);
        when(
                examinationRepo.save(any(Examination.class))
        ).thenReturn(
                examination
        );

    }

    @Test
    public void getExaminationTest() {
        Examination examination = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);

        Patient p1 = new Patient(1L,"patienttim27@gmail.com","Password123","Patient","Patientic","147258589","Adresa",
                "Drzava", "Grad", "11111111111");
        examination.setKind(ExaminationKind.EXAMINATION);
        examination.setPatient(p1);
        examination.setPatient(patientRepo.findOneById(1L));
        examination.setStatus(ExaminationStatus.APPROVED);
        examination.setClinic(clinicService.getClinic("MediaGroup"));
        examination.setInterval(i);
        examination.setDiscount(20);
        examination.setDoctorRating(0);
        examination.setClinicRating(0);
        examination.setId(1L);


        Mockito.when(examinationRepo.findOneById(1L)).thenReturn(examination);

        Examination result = examinationRepo.findOneById(1L);
        assertNotNull(result);
        assertEquals(1L, result.getId());

        verify(examinationRepo, times(1)).findOneById(1L);
    }

    @Test
    public void addExaminationTest() throws Exception {
        Examination examination = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);

        Patient p1 = new Patient(1L,"patienttim27@gmail.com","Password123","Patient","Patientic","147258589","Adresa",
                "Drzava", "Grad", "11111111111");

        examination.setKind(ExaminationKind.EXAMINATION);
        examination.setPatient(p1);
        examination.setPatient(patientRepo.findOneById(1L));
        examination.setStatus(ExaminationStatus.APPROVED);
        examination.setClinic(clinicService.getClinic("MediaGroup"));
        examination.setInterval(i);
        examination.setDiscount(20);
        examination.setDoctorRating(0);
        examination.setClinicRating(0);
        Examination e = examinationRepo.save(examination);

        assertEquals(1L, e.getId());

    }


}