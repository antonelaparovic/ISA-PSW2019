package com.repository;

import com.model.Diagnose;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiagnoseRepo extends JpaRepository<Diagnose, Long> {
    Diagnose findOneById(Long id);

    List<Diagnose> findAll();
}
