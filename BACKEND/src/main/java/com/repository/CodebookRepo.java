package com.repository;



import com.model.Codebook;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Entity;



public interface CodebookRepo extends JpaRepository<Codebook, Long> {

}
