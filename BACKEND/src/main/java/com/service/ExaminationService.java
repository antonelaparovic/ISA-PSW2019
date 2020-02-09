package com.service;

import com.model.Examination;
import com.model.ExaminationStatus;
import com.model.Patient;
import com.repository.ExaminationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExaminationService {

    @Autowired
    ExaminationRepo examinationRepo;
    @Autowired
    MailService mailService;

    public List<Examination> findAll() {
        return  examinationRepo.findAll();
    }

    public Examination save(Examination c)
    {
        return  examinationRepo.save(c);
    }

    public Examination findOneById(Long id)
    {
        return examinationRepo.findOneById(id);
    }

    public boolean editPredefBooked(Examination e, Patient p) {
        List<Examination> tmp = findAll();
        if(tmp.size() == 0)
            return false;

        for(Examination e1 : tmp) {
            if(e1.getId() == e.getId()) {
                e1.setPatient(p);
                e1.setStatus(ExaminationStatus.PREDEF_BOOKED);
                examinationRepo.save(e1);
                return true;
            }
        }
        return false;
    }
}
