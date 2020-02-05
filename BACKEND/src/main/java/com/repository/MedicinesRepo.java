package com.repository;

import com.model.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicinesRepo extends JpaRepository<Medicine, Long> {
    Medicine findOneById(Long id);
    List<Medicine> findAll();
}
