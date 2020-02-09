package com.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.dtos.PatientDTO;
import com.model.Patient;
import com.model.PatientStatus;

import java.util.List;

public interface PatientRepo extends JpaRepository<Patient, Long> {

    List<Patient> findByStatus(PatientStatus status);
    List<Patient> findAllByEmail(String email);
    Patient findByEmail(String email);
    Page<Patient> findAll(Pageable   pageable);
    Patient findOneById(Long id);
}