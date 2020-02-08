package com.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.model.Vacation;
import com.model.VacationStatus;

import java.util.List;

public interface VacationRepo extends JpaRepository<Vacation, Long> {
    List<Vacation> findByStatus(VacationStatus status);
    List<Vacation> findAllByEmail(String email);
    Vacation findByEmail(String email);
    Page<Vacation> findAll(Pageable pageable);
}
