package com.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;



import java.util.List;

import com.model.Codebook;


import javax.persistence.Entity;
import java.util.List;


public interface CodebookRepo extends JpaRepository<Codebook, Long> {
    Codebook findOneById(Long id);
    List<Codebook> findAll();

}
