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
    this.getAllDoctors();
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
        p1.address = p.address;
        p1.city = p.city;
        p1.country = p.country;
        p1.specialization = p.specialization;
        return;
      }
    }
  }

  public getAllDoctors(): Array<Doctor> {
    this.http.get(this.urlDoctor + '/all').subscribe((data: Doctor[]) => {
        for (const c of data) {
          this.doctor = new Doctor(c.email,c.password,c.name,c.surname,c.number,c.address,c.city,c.country,c.specialization);
          this.addDoctor(this.doctor);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listDoctors;
  }
}