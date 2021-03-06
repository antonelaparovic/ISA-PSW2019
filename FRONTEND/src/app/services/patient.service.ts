import { HttpClient } from '@angular/common/http';
import {Patient} from '../models/patient';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {UserService} from '../services/user.service';
import { PatientStatus } from '../models/patientStatus';

@Injectable({
    providedIn:'root'
})

export class PatientService{

    urlPatient = environment.baseUrl + environment.patient;
    listPatients: Array<Patient>= new Array<Patient>();
    patient:Patient;
    tmp: Array<Patient>;
  
    constructor(
      private http: HttpClient,
      private userService: UserService
    ) {
      this.getAllPatients();
    }
  
    public newPatient(patient) {
      return this.http.post(this.urlPatient + '/register', patient);
    }
  
    public loginPatient(patient) {
      this.userService.setToken(patient);
      return this.http.post(environment.baseUrl + '/login', patient, {responseType: 'text'});
    }

    public editPatient(patient){
      return this.http.post(this.urlPatient + '/edit', patient,{responseType: 'text'});
    }
  
    public addPatient(p: Patient) {
      if(this.getPatient(p.email)===null){
        this.listPatients.push(p);
      }
    }
  
    public getPatient(email: string) {
      if ( this.listPatients.length === 0) {
        return null;
      }
      for (const u of this.listPatients) {
        if ( u.email === email) {
          return u;
        }
      }
      return null;
    }

    public setPatient(p: Patient) {

      for (const p1 of this.listPatients) {
        if (p1.email === p.email) {
          p1.name = p.name;
          p1.number = p.number;
          p1.country = p.country;
          p1.address = p.address;
          p1.surname = p.surname;
          p1.city = p.city;
          p1.password = p.password;
          return;
        }
      }
    }

    public getAllPatients(): Array<Patient> {
      this.http.get(this.urlPatient + '/all').subscribe((data: Patient[]) => {
          for (const c of data) {
            this.patient = new Patient(c.email,c.password,c.name,c.surname,c.number,c.address,c.city,c.country,c.insuranceID,c.status);
            this.addPatient(this.patient);
          }
        },
        error => {
          console.log(error);
        }
      );
      return this.listPatients;
    }
  

}