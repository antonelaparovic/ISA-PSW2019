package com.service;
import com.model.Patient;
import com.dtos.PatientDTO;
import com.repository.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class PatientService {

    @Autowired
    private PatientRepo repo;

    public List<Patient> findall()
    {
        return repo.findAll();
    }

    public List<Patient> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<Patient> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public void addPatient(Patient p){
        List<Patient> tmp = findall();

        for(Patient pt:tmp){
            if(pt.getEmail().equals(p.getEmail())){
                System.out.println("Email already exists");
                return;
            }

        }
        repo.save(p);
    }

    public Patient getPatient(String email){
        List<Patient> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(Patient p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }


}
