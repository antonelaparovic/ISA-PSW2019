package com.repository;

import com.model.Examination;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExaminationRepo extends JpaRepository<Examination, Long> {
    Examination findOneById(Long id);
    List<Examination> findAll();
}
