import {User} from '../models/user'
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../models/role';
import {HttpClient} from '@angular/common/http';


export const TOKEN='LoggedInUser';

@Injectable({
    providedIn:'root'
})
export class UserService{
    users: Array<User>=new Array<User>();
    doctor: User;
    patient: User;
    user:User= new User('', '', Role.NONE);
    constructor(private router: Router, private http: HttpClient) {
      this.doctor = new User('doctor@email.com', 'Doctor123', Role.DOCTOR);
      this.patient = new User('patient@email.com', 'Patient123', Role.PATIENT);
      this.users.push(this.doctor);
      this.users.push(this.patient);
      localStorage.setItem(TOKEN, JSON.stringify(this.user));
      console.log("konstruktor userServisa");
      console.log(this.user);
    }

    public addUser(u: User){
      if (this.getUser(u.email) === null) {
        this.users.push(u);
      }
    }

    
  public getUser(email: string) {
    if ( this.users.length === 0) {
      return;
    }
    for (const u of this.users) {
      if ( u.email === email) {
        return u;
      }
    }
    return null;
  }

    public setToken(user){
        this.user=user;
        localStorage.setItem(TOKEN, JSON.stringify(this.user));

    }

    public isLoggedIn() {
        if(localStorage.getItem(TOKEN)!==null){
          return localStorage.getItem(TOKEN);
        }else {
          
          return null;
        }
      }

      public setUser(u: User) {

        for (const p1 of this.users) {
          if (p1.email === u.email) {
            p1.password = u.password;
            return;
          }
        }
      }

    public logout(){
      this.router.navigate(['']);
      this.user =  new User('', '', Role.NONE);
      return localStorage.setItem(TOKEN, JSON.stringify(this.user));
    }

    public isNone() {
      if (this.isLoggedIn()) {
        return this.user.role === Role.NONE;
      }
    }
    
    public isPatient() {
        if (this.isLoggedIn()) {
          return this.user.role === Role.PATIENT;
        }
      }

      public isDoctor() {
        if (this.isLoggedIn()) {
          return this.user.role === Role.DOCTOR;
        }
      }

      public isNurse() {
        if (this.isLoggedIn()) {
          return this.user.role === Role.NURSE;
        }
      }


}