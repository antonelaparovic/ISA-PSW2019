import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { PatientService } from 'src/app/services/patient.service';   // nemam za sve pacijente?

@Component({
  selector: 'app-allpatients-page',
  templateUrl: './allpatients-page.component.html',
  styleUrls: ['./allpatients-page.component.css']
})
export class AllPatientsPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'surname', 'address'];
  patient: Patient;
  allpatientsDataSource = new MatTableDataSource<Patient>();
  allpatients: Array<Patient> = new Array<Patient>();
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private patientService: PatientService
  ) {
    this.allpatients=this.patientService.getAllPatients();
    this.all();
  }

  ngOnInit() {
    this.all();

  }

  all() {
      this.allpatientsDataSource = new MatTableDataSource(this.patientService.getAllPatients());
      this.allpatientsDataSource.paginator = this.paginator;
  }


}
