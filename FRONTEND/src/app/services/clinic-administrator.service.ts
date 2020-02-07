import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClinicAdministrator } from '../models/clinicAdministrator';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicAdministratorService {

  urlClinicAdministrator = environment.baseUrl + environment.clinicAdministrator;
  listClinicAdministrators: Array<ClinicAdministrator> = new Array<ClinicAdministrator>();
  clinicAdministrator: ClinicAdministrator;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    this.getAllClinicAdministrators();
  }

  public loginClinicAdministrator(clinicAdministrator) {
    this.userService.setToken(clinicAdministrator);
    return this.http.post(environment.baseUrl + '/login', clinicAdministrator, {responseType: 'text'});
  }

  public editClinicAdministrator(clinicAdministrator) {
    return this.http.post(this.urlClinicAdministrator + '/edit', clinicAdministrator, {responseType: 'text'});
  }

  public getClinicAdministrator(email: string) {
    console.log(this.listClinicAdministrators)
    if ( this.listClinicAdministrators.length === 0) {
      return null;
    }
    for (const u of this.listClinicAdministrators) {
      if ( u.email === email) {
        return u;
      }
    }

    return null;
  }

  public addClinicAdministrator(d: ClinicAdministrator) {
    if (this.getClinicAdministrator(d.email) === null) {
      this.listClinicAdministrators.push(d);
    }
  }

  public setClinicAdministrator(d: ClinicAdministrator) {
    for (const d1 of this.listClinicAdministrators) {
      if (d1.email === d.email) {
        d1.password = d.password;
        d1.name = d.name;
        d1.surname = d.surname;
        d1.number = d.number;
        d1.clinic = d.clinic;
        return;
      }
    }
  }

  public getAllClinicAdministrators(): Array<ClinicAdministrator> {
    this.http.get(this.urlClinicAdministrator + '/all').subscribe((data: ClinicAdministrator[]) => {
        for (const c of data) {
          this.clinicAdministrator = new ClinicAdministrator(c.email, c.password, c.name, c.surname, c.number, c.clinic);
          console.log(c);
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
