import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Doctor} from '../models/doctor';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  urlDoctor = environment.baseUrl + environment.doctor;
  listDoctors: Array<Doctor> = new Array<Doctor>();
  doctor:Doctor;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { 
    this.doctor = new Doctor("doctor@email.com", "Doctor123", "Doktor", "Doktoric", "123456789");
    this.listDoctors.push(this.doctor);
  }

  public newDoctor(doctor) {
    return this.http.post(this.urlDoctor + '/register', doctor);
  }

  public loginDoctor(doctor) {
    this.userService.setToken(doctor);
    return this.http.post(environment.baseUrl + '/login', doctor, {responseType: 'text'});
  }

  public editDoctor(doctor){
    return this.http.post(this.urlDoctor + '/edit', doctor,{responseType: 'text'});
  }

  public addDoctor(d: Doctor) {
    if(this.getDoctor(d.email)===null){
      this.listDoctors.push(d);
    }
  }

  public getDoctor(email: string) {
    if ( this.listDoctors.length === 0) {
      return null;
    }
    for (const u of this.listDoctors) {
      if ( u.email === email) {
        return u;
      }
    }
    return null;
  }

  public setDoctor(p: Doctor) {

    for (const p1 of this.listDoctors) {
      if (p1.email === p.email) {
        p1.name = p.name;
        p1.number = p.number;
        p1.surname = p.surname;
        p1.password = p.password;
        return;
      }
    }
  }
}