package com.repository;

import com.model.Nurse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NurseRepo extends JpaRepository<Nurse,Long> {
    List<Nurse> findAllByEmail(String email);
    Nurse findByEmail(String email);
    Page<Nurse> findAll(Pageable pageable);
}
