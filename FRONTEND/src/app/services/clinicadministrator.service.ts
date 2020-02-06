import { Injectable } from '@angular/core';
import { ClinicAdministrator } from '../models/clinicadministrator';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicAdministratorService {

  urlClinicAdministrator = environment.baseUrl + environment.clinicAdministrator;
  listClinicAdministrators: Array<ClinicAdministrator> = new Array<ClinicAdministrator>();
  clinicAdministrator:ClinicAdministrator;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { 
    this.getAllClinicAdministrators();
  }

  public newClinicAdministrator(clinicAdministrator) {
    return this.http.post(this.urlClinicAdministrator + '/register', clinicAdministrator);
  }

  public loginClinicAdministrator(clinicAdministrator) {
    this.userService.setToken(clinicAdministrator);
    return this.http.post(environment.baseUrl + '/login', clinicAdministrator, {responseType: 'text'});
  }

  public editClinicAdministrator(clinicAdministrator){
    return this.http.post(this.urlClinicAdministrator + '/edit', clinicAdministrator,{responseType: 'text'});
  }

  public addClinicAdministrator(d: ClinicAdministrator) {
    if(this.getClinicAdministrator(d.email)===null){
      this.listClinicAdministrators.push(d);
    }
  }

  public getClinicAdministrator(email: string) {
    if ( this.listClinicAdministrators.length === 0) {
      return null;
    }
    console.log(this.listClinicAdministrators);
    for (const u of this.listClinicAdministrators) {
      if ( u.email === email) {
        return u;
      }
    }
    return null;
  }

  public setClinicAdministrator(p: ClinicAdministrator) {

    for (const p1 of this.listClinicAdministrators) {
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

  public getAllClinicAdministrators(): Array<ClinicAdministrator> {
    this.http.get(this.urlClinicAdministrator + '/all').subscribe((data: ClinicAdministrator[]) => {
        for (const c of data) {
          this.clinicAdministrator = new ClinicAdministrator(c.email,c.password,c.name,c.surname,c.number,c.clinic);
          this.addClinicAdministrator(this.clinicAdministrator);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listClinicAdministrators;
  }
}