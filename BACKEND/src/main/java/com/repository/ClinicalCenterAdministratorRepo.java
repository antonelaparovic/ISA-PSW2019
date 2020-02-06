package com.repository;

import com.model.ClinicalCenterAdministrator;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.dtos.ClinicalCenterAdministratorDTO;
import com.model.ClinicalCenterAdministrator;


import java.util.List;

public interface ClinicalCenterAdministratorRepo extends JpaRepository<ClinicalCenterAdministrator, Long> {


    List<ClinicalCenterAdministrator> findAllByEmail(String email);
    ClinicalCenterAdministrator findByEmail(String email);
    Page<ClinicalCenterAdministrator> findAll(Pageable   pageable);
}