package com.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import com.model.Medicine;

public interface MedicineRepo extends JpaRepository<Medicine, Long> {

    Medicine findOneById(Long id);
    Page<Medicine> findAll(Pageable pageable);


}
