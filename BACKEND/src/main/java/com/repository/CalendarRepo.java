
package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.model.Calendar;

public interface CalendarRepo extends JpaRepository<Calendar, Long> {

}