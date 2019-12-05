package com.repository;

import com.model.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepo extends JpaRepository<Doctor,Long> {
    List<Doctor> findAllByEmail(String email);
    Doctor findByEmail(String email);
    Page<Doctor> findAll(Pageable pageable);
}
