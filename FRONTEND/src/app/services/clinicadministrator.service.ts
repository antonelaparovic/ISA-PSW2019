import { Injectable } from '@angular/core';
import { Clinicadministrator } from '../models/clinicadministrator';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicadministratorService {

  urlClinicadministrator = environment.baseUrl + environment.doctor;
  listClinicadministrators: Array<Clinicadministrator> = new Array<Clinicadministrator>();
  clinicadministrator:Clinicadministrator;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { 
    this.getAllClinicadministrators();
  }

  public newClinicadministrator(clinicadministrator) {
    return this.http.post(this.urlClinicadministrator + '/register', clinicadministrator);
  }

  public loginClinicadministrator(clinicadministrator) {
    this.userService.setToken(clinicadministrator);
    return this.http.post(environment.baseUrl + '/login', clinicadministrator, {responseType: 'text'});
  }

  public editClinicadministrator(clinicadministrator){
    return this.http.post(this.urlClinicadministrator + '/edit', clinicadministrator,{responseType: 'text'});
  }

  public addClinicadministrator(d: Clinicadministrator) {
    if(this.getClinicadministrator(d.email)===null){
      this.listClinicadministrators.push(d);
    }
  }

  public getClinicadministrator(email: string) {
    if ( this.listClinicadministrators.length === 0) {
      return null;
    }
    console.log(this.listClinicadministrators);
    for (const u of this.listClinicadministrators) {
      if ( u.email === email) {
        return u;
      }
    }
    return null;
  }

  public setClinicadministrator(p: Clinicadministrator) {

    for (const p1 of this.listClinicadministrators) {
      if (p1.email === p.email) {
        p1.name = p.name;
        p1.number = p.number;
        p1.surname = p.surname;
        p1.password = p.password;
        p1.clinic = p.clinic;
        return;
      }
    }
  }

  public getAllClinicadministrators(): Array<Clinicadministrator> {
    this.http.get(this.urlClinicadministrator + '/all').subscribe((data: Clinicadministrator[]) => {
        for (const c of data) {
          this.clinicadministrator = new Clinicadministrator(c.email,c.password,c.name,c.surname,c.number,c.clinic);
          this.addClinicadministrator(this.clinicadministrator);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listClinicadministrators;
  }
}