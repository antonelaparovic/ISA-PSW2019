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
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  public loginDoctor(doctor) {
    this.userService.setToken(doctor);
    return this.http.post(environment.baseUrl + '/login', doctor, {responseType: 'text'});
  }
}