import { HttpClient } from '@angular/common/http';
import {Patient} from '../models/patient';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn:'root'
})

export class PatientService{

    url=environment.baseUrl+environment.patient;

    constructor(
        private http: HttpClient
    ){}


    public addPatient(patient){
        return this.http.post(this.url+'/register',patient);
    }

   public loginPatient(patient){
       return this.http.post(this.url+'/login',patient);
   }


}