package com.repository;

import com.model.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicalRecordRepo extends JpaRepository<MedicalRecord,Long> {
    MedicalRecord findOneById(Long id);
    List<MedicalRecord> findAll();
}
