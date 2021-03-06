import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExaminationType } from '../models/examinationType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExaminationTypeService {

  urlExaminationType = environment.baseUrl + environment.examinationType;
  examinationTypes: Array<ExaminationType> = new Array<ExaminationType>();
  type: ExaminationType;
  typeEx:ExaminationType;
  constructor(private http: HttpClient) { }

  public getAllTypes(): Array<ExaminationType> {
    this.http.get(this.urlExaminationType + '/all').subscribe((data: ExaminationType[]) => {
        for (const c of data) {
          this.type = new ExaminationType(c.label, c.price);
          this.addType(this.type);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.type);
    return this.examinationTypes;
  }

  public addType(t: ExaminationType) {
    if (this.getType(t.label) === null) {
      this.examinationTypes.push(t);
    }
  }

  public getType(name: string) {
    if ( this.examinationTypes.length === 0) {
      return null;
    }
    for (const u of this.examinationTypes) {
      if ( u.label === name) {
        return u;
      }
    }

    return null;
  }

  public setTypeEx(examinationType:ExaminationType){
    this.typeEx=examinationType;
  }

  public getTypeEx(){
    return this.typeEx;
  }
}
