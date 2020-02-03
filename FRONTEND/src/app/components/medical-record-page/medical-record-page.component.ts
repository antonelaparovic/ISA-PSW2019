import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MedicalRecordService } from 'src/app/services/medical-record.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { PatientProfileComponent } from '../patient-profile/patient-profile.component';
import { Patient } from 'src/app/models/patient';
import { MedicalRecord } from 'src/app/models/medicalRecord';


@Component({
  selector: 'app-medical-record-page',
  templateUrl: './medical-record-page.component.html',
  styleUrls: ['./medical-record-page.component.css']
})
export class MedicalRecordPageComponent implements OnInit {
  
  
  records: Array<MedicalRecord> = new Array<MedicalRecord>();
  loggedUser: string = this.userService.isLoggedIn();
  user: User;
  mr: MedicalRecord;
  displayedColumns: string[] = ['Height', 'Weight','BloodType','Allergies','ExaminationReports'];
  dataSource= new MatTableDataSource<MedicalRecord>();
  rec:Array<MedicalRecord>=new Array<MedicalRecord>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private medicalRecordService: MedicalRecordService, 
    private userService: UserService
    ) {
      this.records = medicalRecordService.getAllMedicalRecords();
      this.user = JSON.parse(this.loggedUser);
      this.all();
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.setAll();
    this.dataSource = new MatTableDataSource(this.rec);
    this.dataSource.paginator = this.paginator;
}

  setAll() {
    for (let i = 0; i < this.records.length; i++) {
      const element = this.records[i];
      let truee=0;
      if(element.patient.email==this.user.email){
        for(const c of this.rec){
          if(c.id==element.id)
          truee=1;
        }
        if(truee==0){
          this.rec.push(this.records[i]);
        }
      }
  }
  }

}