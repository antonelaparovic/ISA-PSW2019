import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MedicalRecord } from '../models/medicalRecord';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

  url=environment.baseUrl+environment.medicalRecord;
  record:MedicalRecord;
  listRecords:Array<MedicalRecord>=new Array<MedicalRecord>();
  constructor(
    private http: HttpClient
  ) { 
    this.getAllRecords();
  }



public getAllRecords(): Array<MedicalRecord> {
  console.log(this.url);
  this.http.get(this.url + '/all').subscribe((data: MedicalRecord[]) => {
    for (const c of data) {
      this.record = new MedicalRecord(c.height,c.weight,c.bloodType,c.allergies);
      this.addRecord(this.record);
      console.log(this.record);
      console.log(c.allergies);
    }
  },
    error => {
      console.log(error);
    }
  );

  return this.listRecords;
}

public addRecord(e: MedicalRecord) {
  if (this.getRecord(e.height) === null) {
    this.listRecords.push(e);
  }
}

public getRecord(height:number) {
  if ( this.listRecords.length === 0) {
    return null;
  }
  for (const e of this.listRecords) {
    if ( e.height === height ) {
      return e;
    }
  }

  return null;
}


}