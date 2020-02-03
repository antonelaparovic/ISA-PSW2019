package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Diagnose;

import java.util.List;

public interface DiagnoseRepo extends JpaRepository<Diagnose, Long> {
    Diagnose findOneById(Long id);
    List<Diagnose> findAll();
}
