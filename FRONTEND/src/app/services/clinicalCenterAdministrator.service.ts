import { HttpClient } from '@angular/common/http';
import {ClinicalCenterAdministrator} from '../models/clinicalCenterAdministrator';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {UserService} from '../services/user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn:'root'
})

export class ClinicalCenterAdministratorService{

    urlCCAdmin = environment.baseUrl + environment.clinicalCenterAdmininistrator;
    listCCAdmin: Array<ClinicalCenterAdministrator>= new Array<ClinicalCenterAdministrator>();
    clinicalCenterAdministrator:ClinicalCenterAdministrator;
  
    constructor(
      private http: HttpClient,
      private userService: UserService
    ) {
      this.getAllClinicalCenterAdministrators();
    }
  
    public newCCAdmin(clinicalCenterAdministrator) {
      return this.http.post(this.urlCCAdmin + '/register', clinicalCenterAdministrator);
    }
  
    public loginCCAdmin(clinicalCenterAdministrator) {
      this.userService.setToken(clinicalCenterAdministrator);
      return this.http.post(environment.baseUrl + '/login', clinicalCenterAdministrator, {responseType: 'text'});
    }

    public editCCAdmin(clinicalCenterAdministrator){
      return this.http.post(this.urlCCAdmin + '/edit', clinicalCenterAdministrator,{responseType: 'text'});
    }
  
    public addCCAdmin(p: ClinicalCenterAdministrator) {
      if(this.getCCAdmin(p.email)===null){
        this.listCCAdmin.push(p);
      }
    }
  
    public getCCAdmin(email: string) {
      if ( this.listCCAdmin.length === 0) {
        return null;
      }
      for (const u of this.listCCAdmin) {
        if ( u.email === email) {
          return u;
        }
      }
      return null;
    }

    public setCCAdmin(p: ClinicalCenterAdministrator) {

      for (const p1 of this.listCCAdmin) {
        if (p1.email === p.email) {
          p1.name = p.name;
          p1.number = p.number;
         
          p1.surname = p.surname;
        
          p1.password = p.password;
          return;
        }
      }
    }

    public getAllClinicalCenterAdministrators(): Array<ClinicalCenterAdministrator> {
      this.http.get(this.urlCCAdmin + '/all').subscribe((data: ClinicalCenterAdministrator[]) => {
          for (const c of data) {
            this.clinicalCenterAdministrator = new ClinicalCenterAdministrator(c.email,c.password,c.name,c.surname,c.number);
            this.addCCAdmin(this.clinicalCenterAdministrator);
          }
        },
        error => {
          console.log(error);
        }
      );
      return this.listCCAdmin;
    }


    
    dodajAkc(adminAkc: any): Observable<any> {
      return this.http.post(this.urlCCAdmin+"/dodajAdminaKc", adminAkc);
  }
  addCodebook(codebook: any): Observable<any> {
      return this.http.post(this.urlCCAdmin+"/addCodebook", codebook).pipe(map(data => {return data;}));
  }
  deleteCodebook(codebook): Observable<any> {
     // alert(JSON.stringify(sifarnik));
      return this.http.post(this.urlCCAdmin+"/deleteCodebook", codebook).pipe(map(data => {return data;}));
  }
  returnCodebook(): Observable<any> {
      return this.http.get(this.urlCCAdmin+"/returnCodebook").pipe(map(data => {return data;}));
  }

  

}