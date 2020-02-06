import { Component, OnInit, ViewChild } from '@angular/core';
import { Examination } from 'src/app/models/examination';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ExaminationService } from 'src/app/services/examination.service';
import { ExaminationTable } from 'src/app/models/examinationTable';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-medical-history-page',
  templateUrl: './medical-history-page.component.html',
  styleUrls: ['./medical-history-page.component.css']
})
export class MedicalHistoryPageComponent implements OnInit {

  exTable: ExaminationTable;
  displayedColumns: string[] = ['kind', 'clinic', 'doctor'];
  dataSource = new MatTableDataSource<ExaminationTable>();
  examinations: Array<Examination> = this.examinationService.getAllExaminations();
  exTables: Array<ExaminationTable>=new Array<ExaminationTable>();
  tmp: Array<Examination> = new Array<Examination>();
  loggedUser: string = this.userService.isLoggedIn();
  user: User;
  tmpStr = this.loggedUser.split(',');
  tmpStr1 = this.tmpStr[0].split(':');
  str= "";
  constructor(private patientService: PatientService, private examinationService: ExaminationService,
              private userService: UserService) {
    this.user = JSON.parse(this.loggedUser);
  }

  ngOnInit() {
    this.all();
  }

  all() {
    for (const c of this.examinations) {
      if (c.patient.email === this.user.email) {
        this.tmp.push(c);
        for(const s of c.doctors){
          this.str=s.name+ " ";
        }
        this.exTable= new ExaminationTable(this.kindExamination(c.kind.toString()),this.str,c.clinic.name);
        this.exTables.push(this.exTable);
        console.log(this.exTable);
      }
    }
    this.dataSource = new MatTableDataSource(this.exTables);
    console.log(this.exTables);
    this.str="";
  }

    kindExamination(kind: string) {
    if (kind === 'EXAMINATION') {
      return "EXAMINATION";
    } else {
      return "OPERATION";
    }
  }
}