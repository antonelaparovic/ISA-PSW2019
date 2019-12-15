package com.service;

import com.model.MedicalRecord;
import com.repository.MedicalRecordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MedicalRecordService {


    @Autowired
    MedicalRecordRepo repo;

    public List<MedicalRecord> findAll() {
        return  repo.findAll();
    }

    public MedicalRecord save(MedicalRecord c)
    {
        return  repo.save(c);
    }

    public MedicalRecord findOneById(Long id)
    {
        return repo.findOneById(id);
    }
}
