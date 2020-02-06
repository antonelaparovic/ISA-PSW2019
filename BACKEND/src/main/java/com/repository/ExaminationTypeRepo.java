package com.repository;

import com.model.ExaminationType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExaminationTypeRepo extends JpaRepository<ExaminationType, Long> {

    List<ExaminationType> findAll();
    ExaminationType findOneById(Long id);

}
