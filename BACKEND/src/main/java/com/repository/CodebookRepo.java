package com.repository;



import com.model.Codebook;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Entity;
import java.util.List;


public interface CodebookRepo extends JpaRepository<Codebook, Long> {
    Codebook findOneById(Long id);
    List<Codebook> findAll();
}
