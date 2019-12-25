import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Examination } from '../models/examination';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {

  url=environment.baseUrl+environment.examination;
  listExaminations: Array<Examination> = new Array<Examination>();
  examination:Examination;
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    this.getAllExaminations();
   }


   public getAllExaminations(): Array<Examination> {
    this.http.get(this.url + '/all').subscribe((data: Examination[]) => {
      for (const c of data) {
        this.examination = new Examination(c.id,c.kind,c.status,c.discount,c.patient,c.examinationType);
        this.addExamination(this.examination);
        console.log(this.examination);
      }
    },
      error => {
        console.log(error);
      }
    );

    return this.listExaminations;
  }

  public addExamination(e: Examination) {
    if (this.getExamination(e.id) === null) {
      this.listExaminations.push(e);
    }
  }


  public getExamination(id:number) {
    if ( this.listExaminations.length === 0) {
      return null;
    }
    for (const e of this.listExaminations) {
      if ( e.id === id) {
        return e;
      }
    }

    return null;
  }
}
