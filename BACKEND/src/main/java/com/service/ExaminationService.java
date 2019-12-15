package com.service;

import com.model.Examination;
import com.repository.ExaminationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExaminationService {

    @Autowired
    ExaminationRepo examinationRepo;

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
}
