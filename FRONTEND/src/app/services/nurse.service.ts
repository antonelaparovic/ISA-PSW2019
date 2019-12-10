import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Nurse } from '../models/nurse';
import { UserService } from '../services/user.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  urlNurse = environment.baseUrl + environment.nurse;
  listNurses: Array<Nurse> = new Array<Nurse>();
  nurse:Nurse;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { 
    this.nurse = new Nurse("nurse@email.com", "Nurse123", "Nurse", "Nursic", "123456789");
    this.listNurses.push(this.nurse);
  }

  public newNurse(nurse) {
    return this.http.post(this.urlNurse + '/register', nurse);
  }

  public loginNurse(nurse) {
    this.userService.setToken(nurse);
    return this.http.post(environment.baseUrl + '/login', nurse, {responseType: 'text'});
  }

  public editNurse(nurse){
    return this.http.post(this.urlNurse + '/edit', nurse,{responseType: 'text'});
  }

  public addNurse(d: Nurse) {
    if(this.getNurse(d.email)===null){
      this.listNurses.push(d);
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
        p1.surname = p.surname;
        p1.password = p.password;
        return;
      }
    }
  }
}
