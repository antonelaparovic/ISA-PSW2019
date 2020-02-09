import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { Examination } from 'src/app/models/examination';
import { ExaminationService } from 'src/app/services/examination.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-predef-examination',
  templateUrl: './predef-examination.component.html',
  styleUrls: ['./predef-examination.component.css']
})
export class PredefExaminationComponent implements OnInit {

  
  ExaminationDataSource: MatTableDataSource<Examination>;
  displayedColumns: string[] = ['StartDate', 'EndDate', 'DoctorName', 'DoctorSurname', 'Type', 'Price', 'Discount', 'Make'];
  examinations: Array<Examination> = new Array<Examination>();

  constructor(private examinationService: ExaminationService,
              private userService: UserService,
              private dialogRef: MatDialogRef<PredefExaminationComponent>) {
    this.examinations = examinationService.getAllPredefExaminations();
    console.log(this.examinations);
    this.ExaminationDataSource = new MatTableDataSource(this.examinations);
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  make(examination) {
    const id = examination.id.toLocaleString();
    const user = this.userService.getLoggedUser();
    this.examinationService.makePredefExamination(id, user.email).subscribe(data => {
      this.examinations = this.examinationService.getAllPredefExaminations();
      this.ExaminationDataSource = new MatTableDataSource(this.examinations);
    }, error => {
        console.log(error);
    });
    this.dialogRef.close();
  }

}
