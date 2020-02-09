package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.Medicine;
import com.repository.MedicineRepo;

import java.util.List;
@Service
public class MedicineService {

    @Autowired
    MedicineRepo repo;

    public List<Medicine> findAll() {
        return  repo.findAll();
    }

    public Medicine save(Medicine m)
    {
        return  repo.save(m);
    }

    public Medicine findOneById(Long id)
    {
        return repo.findOneById(id);
    }

    public boolean addMedicine(Medicine m){
        List<Medicine> tmp = findAll();
        if(tmp.size() == 0)
        {
            repo.save(m);
            return true;
        }
        for(Medicine p1 : tmp)
            if(p1.getId() == m.getId())
            {
                return  false;
            }
            else
            {
                repo.save(m);
                return true;
            }

        return false;

    }

    public Medicine getMedicine(Long id){
        List<Medicine> tmp = findAll();
        if(tmp.size() == 0)
            return null;

        for(Medicine p : tmp)
        {
            if(p.getId() == id)
                return p;
        }

        return null;
    }

    public boolean editMedicine(Medicine m) {
        List<Medicine> tmp = findAll();
        if(tmp.size() == 0)
            return false;

        for(Medicine p1 : tmp)
        {
            if(m.getId() == (p1.getId())) {
                p1 = m;
                repo.save(p1);
                return true;
            }
        }

        return false;
    }

}
