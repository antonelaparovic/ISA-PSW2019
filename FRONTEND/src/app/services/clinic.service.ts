import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clinic } from '../models/clinic';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { ExaminationType } from '../models/examinationType';
import { ExaminationTypeService } from './examination-type.service';


@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  urlClinic = environment.baseUrl + environment.clinic;
  listClinics: Array<Clinic> = new Array<Clinic>();
  clinic: Clinic;
  clinicsTypes: Array<Clinic> = new Array<Clinic>();
  examinationTypes: Array<ExaminationType> = new Array<ExaminationType>();
  clinicEx:Clinic;
  type: string;
  constructor( private http: HttpClient, private examinationTypeService: ExaminationTypeService) {
    this.examinationTypes = examinationTypeService.getAllTypes();
    this.getAllClinics();
  }

  public addClinic(c: Clinic) {
    if (this.getClinic(c.name) === null) {
      this.listClinics.push(c);
    }
  }

  public getClinic(name: string) {
    if ( this.listClinics.length === 0) {
      return null;
    }
    for (const u of this.listClinics) {
      if ( u.name === name) {
        return u;
      }
    }

    return null;
  }

  public getClinicByName(name) {
    return this.http.get(this.urlClinic + '/' + name);
  }

  public getAllClinics(): Array<Clinic> {
    this.http.get(this.urlClinic + '/all').subscribe((data: Clinic[]) => {
      console.log(data);
      for (const c of data) {
        this.clinic = new Clinic(c.name, c.address, c.description, c.doctors , c.examinationTypes, c.clinicRating, c.id);
        this.addClinic(this.clinic);
      }
    },
      error => {
        console.log(error);
      }
    );
    return this.listClinics;
  }

  public newClinic(clinic) {
    return this.http.post(this.urlClinic + '/clinical-centre-admin/addClinic', clinic);
  }
  public getClinicsWithType(type: string): Array<Clinic> {

    let params = new HttpParams();
    params = params.append('type', type);
    this.clinicsTypes = new Array<Clinic>();
    this.http.get(this.urlClinic + '/allWithTypes', {params}).subscribe((data: Clinic[]) => {
        for (const c of data) {
          this.clinic = new Clinic(c.name, c.address, c.description, c.doctors , c.examinationTypes, c.clinicRating, c.id);
          this.clinicsTypes.push(this.clinic);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.clinicsTypes;
  }

  public getClinicsWithTypes() {
    return this.clinicsTypes;
  }

}