import { HttpClient } from '@angular/common/http';
import {Patient} from '../models/patient';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn:'root'
})

export class PatientService{

    urlPatient = environment.baseUrl + environment.patient;
    listPatients: Array<Patient>;
  
    constructor(
      private http: HttpClient
    ) {
      this.listPatients = new Array<Patient>();
    }
  
    public newPatient(patient) {
      return this.http.post(this.urlPatient + '/register', patient);
    }
  
    public loginPatient(patient) {
      return this.http.post(this.urlPatient + '/login', patient, {responseType: 'text'});
    }
  
    public addPatient(p: Patient) {
      this.listPatients.push(p);
    }
  
    public getPatient(email: string) {
      if ( this.listPatients.length === 0) {
        return;
      }
      for (const u of this.listPatients) {
        if ( u.email === email) {
          return u;
        }
      }
    }
  

}