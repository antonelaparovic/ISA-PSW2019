package com.service;

import com.model.Doctor;
import com.repository.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepo repo;

    public List<Doctor> findall()
    {
        return repo.findAll();
    }

    public List<Doctor> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<Doctor> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public boolean addPatient(Doctor p){
        List<Doctor> tmp = findall();
        if(tmp.size() == 0)
        {
            repo.save(p);
            return true;
        }
        for(Doctor p1 : tmp)
            if(p1.getEmail().equals(p.getEmail()))
            {
                return  false;
            }
            else
            {
                repo.save(p);
                return true;
            }

        return false;
    }

    public Doctor getDoctor(String email){
        List<Doctor> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Doctor p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }

    public boolean editDoctor(Doctor p){
        List<Doctor> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(Doctor p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }
}
