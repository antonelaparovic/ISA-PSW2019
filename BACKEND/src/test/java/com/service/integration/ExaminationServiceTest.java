package com.service.integration;

import com.model.Examination;
import com.model.ExaminationKind;
import com.model.ExaminationStatus;
import com.model.Interval;
import com.repository.ExaminationRepo;
import com.service.ClinicService;
import com.service.ExaminationService;
import com.service.PatientService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ExaminationServiceTest {

    @Autowired
    private ExaminationService examinationService;
    @Autowired
    ExaminationRepo examinationRepo;
    @Autowired
    PatientService patientService;
    @Autowired
    ClinicService clinicService;

    @BeforeEach
    void setUp() {

    }

    @Test
    void findAll() {
        List<Examination> examinations =  examinationService.findAll();
        assertEquals(examinations.size(), 12);
    }

    @Test
    void findByOneById() {
        Examination e = examinationService.findOneById(103L);

        assertEquals(e.getInterval().getId(), 165);
        assertEquals(e.getClinicRating(), 1);
        assertEquals(e.getDiscount(), 3);
        assertEquals(e.getDoctorRating(), 1);
        assertEquals(e.getKind(), ExaminationKind.OPERATION);
        assertEquals(e.getStatus(), ExaminationStatus.AWAITING);
        assertEquals(e.getClinic().getId(), 101);
        assertEquals(e.getClinicAdministrator().getId(), 1);
        assertEquals(e.getExaminationType().getId(), 2);
        assertEquals(e.getPatient().getId(), 87);
        assertEquals(e.getRoom().getId(), 100);
        assertEquals(e.getNurse().getId(), 100);
    }

    @Test
    void save() {
        Examination e = examinationService.findOneById(103L);
        e.setKind(ExaminationKind.OPERATION);

        assertEquals(e.getKind(),ExaminationKind.OPERATION);

        examinationRepo.save(e);
    }

    @Transactional
    @Test
    @Rollback
    void editPredefBooked() throws Exception {
        Examination e = examinationService.findOneById(205L);
        boolean flag = false;

        flag = examinationService.editPredefBooked(e, patientService.getPatient("patienttim27@gmail.com"));

        assertEquals(flag, true);

    }

    @Transactional
    @Test
    @Rollback
    void addExamination() throws Exception {
        Examination e = new Examination();
        String startDate="2020-03-20T13:00:00";
        String endDate="2020-03-20T14:00:00";

        LocalDateTime start = LocalDateTime.parse(startDate);
        LocalDateTime end = LocalDateTime.parse(endDate);
        Interval i = new Interval();
        i.setStartTime(start);
        i.setEndTime(end);

        e.setKind(ExaminationKind.EXAMINATION);
        e.setPatient(patientService.getPatient("patienttim27@gmail.com"));
        e.setStatus(ExaminationStatus.AWAITING);
        e.setClinic(clinicService.getClinic("MediaGroup"));
        e.setInterval(i);
        e.setDiscount(20);
        e.setDoctorRating(0);
        e.setClinicRating(0);

        int sizeBeforeAdd = examinationService.findAll().size();
        try {
            examinationService.addExamination(e);
        }catch (Exception e1) {
            e1.printStackTrace();
        }
        assertEquals(examinationService.findAll().size(), sizeBeforeAdd + 1);

    }
}
