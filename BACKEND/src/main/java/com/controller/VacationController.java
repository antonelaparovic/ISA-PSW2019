package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dtos.DoctorDTO;
import com.dtos.PatientDTO;
//import com.dtos.TimeOffDoctorDTO;
import com.dtos.TimeOffNurseDTO;
import com.dtos.VacationDTO;
import com.model.*;
import com.service.NurseService;
//import com.service.TimeOffDoctorService;
import com.service.TimeOffNurseService;
import com.service.UserService;
import com.service.VacationService;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
public class VacationController {

    @Autowired
    private VacationService vacationService;
    @Autowired
    private NurseService nurseService;
    @Autowired
    private TimeOffNurseService timeOffNurseService;
    @Autowired
    private UserService userService;

    @GetMapping(value = "/zahtev/all")
    public ResponseEntity<List<Vacation>> all() {
        return new ResponseEntity<>(vacationService.findall(), HttpStatus.OK);
    }

    @GetMapping(value = "/zahtev/VacationRequest")
    public ResponseEntity<ArrayList<Vacation>> allRequests() {
        List<Vacation> tmp = vacationService.findall();
        ArrayList<Vacation> returnList = new ArrayList<Vacation>();
        for (Vacation p : tmp) {
            System.out.println(p.getStatus());
            if (p.getStatus() == VacationStatus.AWAITING_APPROVAL) {
                returnList.add(p);
            }
        }
        return new ResponseEntity<>(returnList, HttpStatus.OK);
    }
/*
    @PostMapping(value = "zahtev/nurse/VacationRequest")
    public String addVacation(@RequestBody VacationDTO vacation){

        Vacation pat = vacationService.getVacation(vacation.getEmail());
        System.out.println(vacation.getName());
        if(pat == null){
            Vacation newVacation = new Vacation();
            newVacation.setEmail(vacation.getEmail());
            newVacation.setName(vacation.getName());
            newVacation.setStartingDate(vacation.getStartingDate());
            newVacation.setSurname(vacation.getSurname());
            newVacation.setFinishDate(vacation.getFinishDate());
            newVacation.setStatus(VacationStatus.AWAITING_APPROVAL);


            boolean uspesno = vacationService.addVacation(newVacation);
            if(uspesno == true){
                System.out.println("New account with email: " + newVacation.getEmail());

            }
            else
            {
                System.out.println("Email already exists: " + newVacation.getEmail());
            }

            return "";
        }
        else
            return "Email already exists";
    }
*/
    @PostMapping(value = "zahtev/nurse/VacationRequest")
    public String addVacation1(@RequestBody VacationDTO vacation){

        Vacation pat = vacationService.getVacation(vacation.getEmail());
        Nurse dot = nurseService.getNurse(vacation.getEmail());
        System.out.println(vacation.getName());
        if(pat == null) {
            Vacation newVacation = new Vacation();
            newVacation.setEmail(vacation.getEmail());
            newVacation.setName(vacation.getName());
            newVacation.setStartingDate(vacation.getStartingDate());
            newVacation.setSurname(vacation.getSurname());
            newVacation.setFinishDate(vacation.getFinishDate());
            newVacation.setStatus(VacationStatus.AWAITING_APPROVAL);
            TimeOffNurse timeOffNurse = new TimeOffNurse();
            timeOffNurse.setNurse(dot);
            timeOffNurse.setStatus(OffStatus.AWAITING);
            timeOffNurse.setType(OffType.TIME_OFF);
            timeOffNurseService.addTimeOffNurse(timeOffNurse);

            System.out.println(vacation.getEmail());
            boolean uspesno = vacationService.addVacation(newVacation);

            if(uspesno == true){
                System.out.println("New account with email: " + newVacation.getEmail());

            }
            else
            {
                System.out.println("Email already exists: " + newVacation.getEmail());
            }

            return "";
        }
        else
            return "Email already exists";


    }

    @PostMapping(value = "/zahtev/edit")
    public String editPatient(@RequestBody VacationDTO p)
    {
        Vacation pat = vacationService.getVacation(p.getEmail());
        Nurse dot = nurseService.getNurse(p.getEmail());
        System.out.println(p.getFinishDate());
        if(pat != null){
            System.out.println("Prosao IF");
            System.out.println(pat.getEmail());
            System.out.println("Sad sestre");
            System.out.println(dot.getEmail());

            if(pat.getEmail().equals(dot.getEmail())) {
                System.out.println("Usao");

                pat.setEmail(p.getEmail());
                pat.setName(p.getName());
                pat.setSurname(p.getSurname());
                pat.setStartingDate(p.getStartingDate());
                pat.setFinishDate(p.getFinishDate());
                pat.setStatus(p.getStatus());
                System.out.println("Izmena");
                TimeOffNurse timeOffNurse = timeOffNurseService.getTimeOffNurse(p.getEmail());
                timeOffNurse.setType(OffType.HOLIDAY);
                System.out.println("Izmena2");

                timeOffNurse.setStatus(OffStatus.APPROVED);
                System.out.println("Izmena3");

                timeOffNurse.setNurse(dot);
                timeOffNurseService.editTimeOffNurse(timeOffNurse);
                System.out.println("Uradio edit");

            }
            boolean uspesno = vacationService.editVacation(pat);

            if(uspesno == true) {
                System.out.println("User with email: " + pat.getEmail() + " is edited");
                return "Uspesno";
            }

            else {
                System.out.println("Error with edit");
                return "Neuspesno";
            }

        }
        else
        {
            System.out.println("Error with edit else");
        }

        return "Greska";
    }



}
