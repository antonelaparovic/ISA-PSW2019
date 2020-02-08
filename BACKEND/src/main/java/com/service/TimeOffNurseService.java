package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.Nurse;
import com.model.TimeOffNurse;

import com.repository.TimeOffNurseRepo;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TimeOffNurseService{

    @Autowired
    TimeOffNurseRepo repo;

    public List<TimeOffNurse> findAll() {
        return repo.findAll();
    }

    public boolean NurseOff(LocalDateTime date, Nurse d) {

        List<TimeOffNurse> tmp = findAll();
        for(TimeOffNurse t : tmp) {
            if(t.getNurse().getEmail().equals(d.getEmail())) {
                LocalDateTime pocetni = t.getInterval().getStartTime();
                LocalDateTime krajnji = t.getInterval().getEndTime();
                if(date.isAfter(pocetni) && date.isBefore(krajnji)) {
                    return false;
                }
            }

        }


        return true;
    }

    public void addTimeOffNurse(TimeOffNurse t){
        repo.save(t);
    }

    public boolean editTimeOffNurse(TimeOffNurse d){
        List<TimeOffNurse> tmp = findAll();
        if(tmp.size() == 0)
            return false;

        for(TimeOffNurse d1 : tmp)
        {
            if(d.getId().equals(d1.getId())) {
                d1 = d;
                repo.save(d1);
                return true;
            }
        }

        return false;
    }

    public TimeOffNurse getTimeOffNurse(String email){
        List<TimeOffNurse> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(TimeOffNurse p : tmp)
        {
            if(p.getNurse().getEmail().equals(email))
                return p;
        }

        return null;
    }


}
