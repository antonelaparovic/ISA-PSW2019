package com.service;
import com.dtos.ClinicalCenterAdministratorDTO;
import com.dtos.CodebookDTO;
import com.model.*;

import com.repository.*;
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
    @Autowired
    private CodebookRepo codebookRepo;
    @Autowired
    private MedicinesRepo medicinesRepo;
    @Autowired
    private DiagnoseRepo diagnoseRepo;

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

    public boolean editCCAdmin(ClinicalCenterAdministrator p) {
        List<ClinicalCenterAdministrator> tmp = findall();
        if (tmp.size() == 0)
            return false;

        for (ClinicalCenterAdministrator p1 : tmp) {
            if (p.getEmail().equals(p1.getEmail())) {
                p1 = p;
                repo.save(p1);
                return true;
            }
        } return false;

    }

        //

       // public User dodavanjeAkc (ClinicalCenterAdministratorDTO ccAdminDTO) {

           // if(UserRepo.(adminDTO.getEmail()) != null) {
             //   return null;
         //   }


            //User admin = new User();
            //admin.setEmail(adminDTO.getEmail());
            //admin.setIme(adminDTO.getIme());
            //admin.setPrezime(adminDTO.getPrezime());
            //admin.setLozinka(bcript.encode(adminDTO.getLozinka()));

            //List<Authority> auth = this.authService.findByname("ROLE_ADMIN_KC");
            //admin.setAuthorities(auth);

           // return userRepository.save(admin);
        //}



        public Codebook returnCodebook() {
            return codebookRepo.findAll().get(0);
        }

        public Codebook addCodebook(CodebookDTO codebookDTO) {

            if(codebookDTO.getDiagnose() == null)
                if(codebookDTO.getMedicine() == null)
                    return null;
                else return addMedicine(codebookDTO);
            else return addDiagnose(codebookDTO);
        }

        public Codebook deleteCodebook(CodebookDTO sifarnikDTO) {

            if(sifarnikDTO.getDiagnose() == null)
                if(sifarnikDTO.getMedicine() == null)
                    return null;
                else return deleteMedicine(sifarnikDTO);
            else return deleteDiagnose(sifarnikDTO);
        }

        private Codebook deleteMedicine(CodebookDTO sifarnikDTO) {

            Codebook sifarnik = codebookRepo.findAll().get(0);
            Medicine lek = medicinesRepo.getOne(sifarnikDTO.getMedicine().getId());
            sifarnik.getMedicines().remove(lek);
            return codebookRepo.saveAndFlush(sifarnik);
        }

        private Codebook deleteDiagnose(CodebookDTO sifarnikDTO) {

            Codebook sifarnik = codebookRepo.findAll().get(0);
            Diagnose dijagnoza = diagnoseRepo.getOne(sifarnikDTO.getDiagnose().getId());
            sifarnik.getDiagnoses().remove(dijagnoza);
            return codebookRepo.saveAndFlush(sifarnik);
        }

        private Codebook addDiagnose(CodebookDTO sifarnikDTO) {

            Codebook sifarnik = codebookRepo.findAll().get(0);

            sifarnik.getDiagnoses().add(diagnoseRepo.save(sifarnikDTO.getDiagnose()));
            return codebookRepo.saveAndFlush(sifarnik);
        }

        private Codebook addMedicine(CodebookDTO sifarnikDTO) {
            Codebook sifarnik = codebookRepo.findAll().get(0);

            sifarnik.getMedicines().add(medicinesRepo.save(sifarnikDTO.getMedicine()));
            return codebookRepo.saveAndFlush(sifarnik);
        }


    }


