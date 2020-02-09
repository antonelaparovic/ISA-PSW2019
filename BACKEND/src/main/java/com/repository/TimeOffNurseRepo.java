package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.model.TimeOffNurse;

import java.util.List;

public interface TimeOffNurseRepo extends JpaRepository<TimeOffNurse, Long>{
    List<TimeOffNurse> findAll();


}
