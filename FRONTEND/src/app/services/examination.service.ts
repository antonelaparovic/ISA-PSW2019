import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Examination } from '../models/examination';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { ExaminationKind } from '../models/examinationKind';
import { ExaminationStatus } from '../models/examinationStatus';
import { ExaminationType } from '../models/examinationType';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService {
  url = environment.baseUrl + environment.examination;
  listExaminations: Array<Examination> = new Array<Examination>();
  examination: Examination;
  predefExaminations: Array<Examination> = new Array<Examination>();
  etype: ExaminationType;
  constructor(
    private http: HttpClient,
  ) {
    this.getAllExaminations();
  }

  public whichKindExamination(kind: string) {
    if (kind === 'EXAMINATION') {
      return ExaminationKind.EXAMINATION;
    } else {
      return ExaminationKind.OPERATION;
    }
  }

  public whichStatusExamination(status: string) {
    if (status === 'APPROVED') {
      return ExaminationStatus.APPROVED;
    } else if (status === 'AWAITING') {
      return ExaminationStatus.AWAITING;
    } else if (status === 'PREDEF_BOOKED') {
      return  ExaminationStatus.PREDEF_BOOKED;
    } else {
      return ExaminationStatus.PREDEF_AVAILABLE;
    }
  }

  public getAllExaminations(): Array<Examination> {
    this.http.get(this.url + '/all').subscribe((data: Examination[]) => {
        this.listExaminations = new Array<Examination>();
        for (const c of data) {
          this.examination =  new Examination(this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id);
          this.listExaminations.push(this.examination)
          console.log(this.examination);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.listExaminations);
    return this.listExaminations;
  }

  public addExamination(e: Examination) {
    if (this.getExamination(e.id) === null) {
      this.listExaminations.push(e);
    }
  }

  
  public getAllPredefExaminations(): Array<Examination> {
    this.http.get(this.url + '/allPredefExaminations').subscribe((data: Examination[]) => {
        this.predefExaminations = new Array<Examination>();
        for (const c of data) {
          this.examination =  new Examination(this.whichKindExamination(c.kind.toString()), this.whichStatusExamination(c.status.toString()), c.examinationType, c.discount, c.doctorRating, c.clinicRating, c.nurse, c.clinic, c.patient, c.doctors, c.id, c.interval);
          if(this.examination.kind===ExaminationKind.EXAMINATION){
          this.predefExaminations.push(this.examination);
          }
          console.log(this.examination);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.predefExaminations);
    return this.predefExaminations;
  }

  public makePredefExamination(id: string, email: string) {
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('email', email);
    return this.http.post(this.url + '/makePredefExamination', params);
  }


  public getExamination(id: number) {
    if ( this.listExaminations.length === 0) {
      return null;
    }
    for (const e of this.listExaminations) {
      if (e.id === id) {
        return e;
      }
    }

    return null;
  }


  public newExamination(date: string, patientEmail: string, doctorEmail: string, type: string, clinicId: string, kind: string) {
    let params = new HttpParams();
    params = params.append('date', date);
    params = params.append('patientEmail', patientEmail);
    params = params.append('doctorEmail', doctorEmail);
    params = params.append('type', type);
    params = params.append('clinicId', clinicId);
    params = params.append('kind', kind);
    return this.http.post(this.url + '/addExamination', params);
  }
}
