package com.service;

import com.model.ExaminationType;
import com.repository.ExaminationTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExaminationTypeService {
    @Autowired
    private ExaminationTypeRepo examinationTypeRepo;

    public List<ExaminationType> findAll()
    {
        return examinationTypeRepo.findAll();
    }
    public ExaminationType findOneById(Long id) {
        return examinationTypeRepo.findOneById(id);
    }
}
