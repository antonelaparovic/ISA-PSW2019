package com.service;
import com.model.ClinicalCenterAdministrator;

import com.repository.ClinicalCenterAdministratorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.concurrent.ConcurrentLinkedDeque;


@Service
public class ClinicalCenterAdministratorService {

    @Autowired
    private ClinicalCenterAdministratorRepo repo;

    public List<ClinicalCenterAdministrator> findall() {
        return repo.findAll();
    }

    public List<ClinicalCenterAdministrator> findAllByEmail(String email){
        return repo.findAllByEmail(email);
    }

    public Page<ClinicalCenterAdministrator> findAll(Pageable page) {
        return repo.findAll(page);
    }

    public boolean addCCAdmin(ClinicalCenterAdministrator p){
        List<ClinicalCenterAdministrator> tmp = findall();
        if(tmp.size() == 0) {
            repo.save(p);
            return true;
        }
        for(ClinicalCenterAdministrator p1 : tmp)
            if(p1.getEmail().equals(p.getEmail())) {
                return  false;
            }
            else {
                repo.save(p);
                return true;
            }
        return false;
    }

    public ClinicalCenterAdministrator getCCAdmin(String email){
        List<ClinicalCenterAdministrator> tmp = findall();
        if(tmp.size() == 0)
            return null;

        for(ClinicalCenterAdministrator p : tmp)
        {
            if(p.getEmail().equals(email))
                return p;
        }

        return null;
    }

    public boolean editCCAdmin(ClinicalCenterAdministrator p){
        List<ClinicalCenterAdministrator> tmp = findall();
        if(tmp.size() == 0)
            return false;

        for(ClinicalCenterAdministrator p1 : tmp)
        {
            if(p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
<<<<<<< Updated upstream
=======
        } return false;

    }




        public Codebook returnCodebook() {
            return codebookRepo.findAll().get(0);
        }

        public Codebook addCodebook(CodebookDTO codebookDTO) {

            if(codebookDTO.getDiagnose() == null)
                if(codebookDTO.getMedicine() == null)
                    return null;
                else return addMedicine(codebookDTO);
            else return addDiagnose(codebookDTO);
>>>>>>> Stashed changes
        }

        return false;
    }
}
