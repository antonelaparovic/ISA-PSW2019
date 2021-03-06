import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientDoctorSearchComponent } from '../patient-doctor-search/patient-doctor-search.component';
import { PatientNewExaminationComponent } from '../patient-new-examination/patient-new-examination.component';

@Component({
  selector: 'app-patient-doctors-list',
  templateUrl: './patient-doctors-list.component.html',
  styleUrls: ['./patient-doctors-list.component.css']
})
export class PatientDoctorsListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Surname', 'doctorRating','Price','Schedule'];
  doctorDataSource: MatTableDataSource<Doctor>;
  doctors: Array<Doctor>;
  
  termins: Array<string[]> = new Array<string[]>();
  @Input() doctorSearchDialog: PatientDoctorSearchComponent;
  constructor(private doctorService: DoctorService,
              public searchDialog: MatDialog,
              private dialogRef: MatDialogRef<PatientDoctorSearchComponent>) {
    this.doctors = doctorService.getDoctorss();
    this.termins = doctorService.getExaminationsInterval();
    this.doctorDataSource = new MatTableDataSource(this.doctors);
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.doctorDataSource.filter = filterValue.trim().toLowerCase();

    if (this.doctorDataSource.paginator) {
      this.doctorDataSource.paginator.firstPage();
    }
  }

  searchDoctors() {
    const dialog = this.searchDialog.open(PatientDoctorSearchComponent);
    dialog.afterClosed().subscribe(data => {
        if (data !== undefined) {
         this.doctors = data;
         this.doctorDataSource = new MatTableDataSource(data);
        }
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

  schedule(element){
    this.doctorService.setDoctorEx(element);
    const dialog = this.searchDialog.open(PatientNewExaminationComponent); dialog.afterClosed().subscribe(data => {
      this.dialogRef.close();
    }); 
  }

}
