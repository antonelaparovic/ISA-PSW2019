package com.service;
import com.dtos.CodebookDTO;
import com.model.ClinicalCenterAdministrator;

import com.model.Codebook;
import com.model.Diagnose;
import com.model.Medicine;
import com.repository.ClinicalCenterAdministratorRepo;
import com.repository.CodebookRepo;
import com.repository.DiagnoseRepo;
import com.repository.MedicinesRepo;
import org.omg.CORBA.CODESET_INCOMPATIBLE;
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
    @Autowired
    private CodebookRepo codebookRepo;
    @Autowired
    private MedicinesRepo medicinesRepository;
    @Autowired
    private DiagnoseRepo diagnozeRepository;

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
    }

    public Codebook deleteCodebook(CodebookDTO codebookDTO) {

        if(codebookDTO.getDiagnose() == null)
            if(codebookDTO.getMedicine() == null)
                return null;
            else return deleteMedicine(codebookDTO);
        else return deleteDiagnose(codebookDTO);
    }

    private Codebook deleteMedicine(CodebookDTO codebookDTO) {

        Codebook codebook = codebookRepo.findAll().get(0);
        Medicine lek = medicinesRepository.getOne(codebookDTO.getMedicine().getId());
        codebook.getMedicines().remove(lek);
        return codebookRepo.saveAndFlush(codebook);
    }

    private Codebook deleteDiagnose(CodebookDTO codebookDTO) {

        Codebook codebook = codebookRepo.findAll().get(0);
        Diagnose dijagnoza = diagnozeRepository.getOne(codebookDTO.getDiagnose().getId());
        codebook.getDiagnoses().remove(dijagnoza);
        return codebookRepo.saveAndFlush(codebook);
    }

    private Codebook addDiagnose(CodebookDTO sifarnikDTO) {

        Codebook sifarnik = codebookRepo.findAll().get(0);

        sifarnik.getDiagnoses().add(diagnozeRepository.save(sifarnikDTO.getDiagnose()));
        return codebookRepo.saveAndFlush(sifarnik);
    }

    private Codebook addMedicine(CodebookDTO sifarnikDTO) {
        Codebook sifarnik = codebookRepo.findAll().get(0);
        sifarnik.getMedicines().add(medicinesRepository.save(sifarnikDTO.getMedicine()));
        return codebookRepo.saveAndFlush(sifarnik);
    }
    }

