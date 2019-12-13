import { HttpClient } from '@angular/common/http';
import {Nurse} from '../models/nurse';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {UserService} from '../services/user.service';


@Injectable({
    providedIn:'root'
})
<<<<<<< Updated upstream
=======
export class NurseService {
  urlNurse = environment.baseUrl + environment.nurse;
  listNurses: Array<Nurse> = new Array<Nurse>();
  nurse:Nurse;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { 
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
    this.getAllNurses();
  }

  public newNurse(nurse) {
    return this.http.post(this.urlNurse + '/register', nurse);
  }

  public loginNurse(nurse) {
    this.userService.setToken(nurse);
    return this.http.post(environment.baseUrl + '/login', nurse, {responseType: 'text'});
  }
>>>>>>> Stashed changes

export class NurseService{

    urlNurse = environment.baseUrl + environment.nurse;
    listNurses: Array<Nurse>= new Array<Nurse>();
    nurse:Nurse;
  
    constructor(
      private http: HttpClient,
      private userService: UserService
    ) {
      this.getAllNurses();
    }
  
    public newNurse(nurse) {
      return this.http.post(this.urlNurse + '/register', nurse);    // da li treba ?
    }
  
    public loginNurse(nurse) {
      this.userService.setToken(nurse);
      return this.http.post(environment.baseUrl + '/login', nurse, {responseType: 'text'});
    }

    public editNurse(nurse){
      return this.http.post(this.urlNurse + '/edit', nurse,{responseType: 'text'});
    }
  
    public addNurse(p: Nurse) {
      if(this.getNurse(p.email)===null){
        this.listNurses.push(p);
      }
    }
  
    public getNurse(email: string) {
      if ( this.listNurses.length === 0) {
        return null;
      }
      for (const u of this.listNurses) {
        if ( u.email === email) {
          return u;
        }
      }
      return null;
    }

    public setNurse(p: Nurse) {

      for (const p1 of this.listNurses) {
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
<<<<<<< Updated upstream

    public getAllNurses(): Array<Nurse> {
      this.http.get(this.urlNurse + '/all').subscribe((data: Nurse[]) => {
          for (const c of data) {
            this.nurse = new Nurse(c.email,c.password,c.name,c.surname,c.number,c.address,c.city,c.country);
            this.addNurse(this.nurse);
          }
        },
        error => {
          console.log(error);
        }
      );
      return this.listNurses;
    }
  

}
=======
  }

  public getAllNurses(): Array<Nurse> {
    this.http.get(this.urlNurse + '/all').subscribe((data: Nurse[]) => {
        for (const c of data) {
          this.nurse = new Nurse(c.email,c.password,c.name,c.surname,c.number,c.address,c.city,c.country);
          this.addNurse(this.nurse);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listNurses;
  }

  
  public getAllNurses(): Array<Nurse> {
    this.http.get(this.urlNurse + '/all').subscribe((data: Nurse[]) => {
        for (const c of data) {
          this.nurse = new Nurse(c.email,c.password,c.name,c.surname,c.number,c.address,c.city,c.country);
          this.addNurse(this.nurse);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listNurses;
  }

}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
