package com.repository;


import com.model.Clinic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClinicRepo extends JpaRepository<Clinic, Long> {

    Clinic findOneById(Long id);
    List<Clinic> findAll();
}