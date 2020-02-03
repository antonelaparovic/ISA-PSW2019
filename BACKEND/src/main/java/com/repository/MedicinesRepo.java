package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Medicine;

import java.util.List;

public interface MedicinesRepo extends JpaRepository<Medicine, Long> {
    Medicine findOneById(Long id);
    List<Medicine> findAll();
}
