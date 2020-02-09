import { Injectable } from '@angular/core';
import {Nurse} from '../models/nurse';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {environment} from '../../environments/environment';
import {Medicine} from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  url = environment.baseUrl + environment.medicine
  listMedicines: Array<Medicine> = new Array<Medicine>();
  medicine: Medicine;

  constructor(
    private http: HttpClient) {

    this.getAllMedicines();
  }

  public editMedicine(medicine) {
    return this.http.post(this.url + '/edit', medicine, {responseType: 'text'});
  }

  public newMedicine(medicine) {
    return this.http.post(this.url + '/clinicalCenterAdministrator/addMedicine', medicine);
  }


  public getMedicine(id: number) {
    if ( this.listMedicines.length === 0) {
      return null;
    }
    for (const u of this.listMedicines) {
      if ( u.id === id) {
        return u;
      }
    }

    return null;
  }

  public setMedicine(p: Medicine) {

    for (const p1 of this.listMedicines) {
      if (p1.id === p.id) {
        p1.title = p.title;
        p1.description = p.description;
        p1.strenght = p.strenght;
        return;
      }
    }
  }

  public addMedicine(n: Medicine) {
    if (this.getMedicine(n.id) === null) {
      this.listMedicines.push(n);
    }
  }

  public getAllMedicines(): Array<Medicine> {
    this.http.get(this.url + '/getAllMedicines').subscribe((data: Medicine[]) => {
        for (const c of data) {
          this.medicine = new Medicine(c.id, c.title, c.description, c.strenght);
          this.addMedicine(this.medicine);
        }
      },
      error => {
        console.log(error);
      }
    );

    return this.listMedicines;
  }

}
