import {User} from '../models/user'
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../models/role';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


export const TOKEN='LoggedInUser';

@Injectable({
    providedIn:'root'
})
export class UserService{
    urlUser = environment.baseUrl + environment.user;
    users: Array<User>=new Array<User>();
    user:User= new User('', '', Role.NONE);
    u:User;
    constructor(private router: Router, private http: HttpClient) {
      this.getAllUsers();
      localStorage.setItem(TOKEN, JSON.stringify(this.user));
    }

    public addUser(u: User){
      if (this.getUser(u.email) === null) {
        this.users.push(u);
      }
    }

    public setLoggedUser(user: User) {
      this.user = user;
    }
  
    public getLoggedUser() {
      return this.user;
    }
    
  public getUser(email: string) {
    if ( this.users.length === 0) {
      return null;
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
      localStorage.removeItem(TOKEN);
      localStorage.setItem(TOKEN, JSON.stringify(this.user));
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

      public isCCAdmin() {
        if (this.isLoggedIn()) {
          return this.user.role === Role.CCADMIN;
        }
      }

      public isClinicAdministrator() {
        if (this.isLoggedIn()) {
          return this.user.role === Role.CLINICADMINISTRATOR;
        }
      }

      public getAllUsers(): Array<User> {
        this.http.get(this.urlUser + '/all').subscribe((data: User[]) => {
            for (const c of data) {
                this.u = new User(c.email, c.password, this.whichRole(c.role.toString()));
                this.addUser(this.u);
            }
          },
          error => {
            console.log(error);
          }
        );
        console.log(this.users);
        return this.users;
      }

      public whichRole(role: string) {
        if (role === 'PATIENT') {
          return Role.PATIENT;
        } else if (role === 'DOCTOR') {
          return  Role.DOCTOR;
        } else if (role === 'NURSE') {
          return  Role.NURSE;
        } else if (role === 'CCADMIN') {
          return  Role.CCADMIN;
        } else if (role === 'CLINICADMINISTRATOR') {
          return  Role.CLINICADMINISTRATOR;
        } else {
          console.log("ovde je null");
          return null;
        }
    
      }


}