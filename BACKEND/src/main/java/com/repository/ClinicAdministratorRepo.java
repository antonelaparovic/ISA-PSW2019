package com.repository;

import com.model.ClinicAdministrator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClinicAdministratorRepo extends JpaRepository<ClinicAdministrator, Long> {
    List<ClinicAdministrator> findAllByEmail(String email);
    ClinicAdministrator findByEmail(String email);
    Page<ClinicAdministrator> findAll(Pageable pageable);
}
