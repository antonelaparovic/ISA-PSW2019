import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Clinic } from 'src/app/models/clinic';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { ClinicService } from 'src/app/services/clinic.service';
import { Doctor } from 'src/app/models/doctor';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DoctorService } from 'src/app/services/doctor.service';
import { ClinicSearchComponent } from '../clinic-search/clinic-search.component';
import { PatientDoctorsListComponent } from '../patient-doctors-list/patient-doctors-list.component';
import { PredefExaminationComponent } from '../predef-examination/predef-examination.component';

@Component({
  selector: 'app-clinics-page',
  templateUrl: './clinics-page.component.html',
  styleUrls: ['./clinics-page.component.css'],
})
export class ClinicsPageComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Address', 'Rating', 'Doctors'];
  clinic: Clinic;
  dataSource = new MatTableDataSource<Clinic>();

  clinics: Array<Clinic> = new Array<Clinic>();

  condition: boolean;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private clinicService: ClinicService,
    private doctorService: DoctorService,
    public dialog: MatDialog,
    public doctorsDialog:MatDialog,
    public predefExaminaitonDialog: MatDialog,
  ) {
    this.clinics=this.clinicService.getAllClinics();
    this.condition=true;
    this.all();
  }

  ngOnInit() {
    this.all();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  all() {
    this.dataSource = new MatTableDataSource(this.clinicService.getAllClinics());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    const dialog = this.dialog.open(ClinicSearchComponent);
    dialog.afterClosed().subscribe(data => {
       if (data !== undefined) {
         this.clinics = data.clinics;
         console.log(this.clinics);
         this.dataSource = new MatTableDataSource(this.clinics);
         this.condition = false;
         this.doctorService.setDate(data.date);
       }
      }
    );
  }

  doctorList(element: Clinic) {
    this.doctorService.setDoctorss(element.doctors);
    this.clinicService.setClinicEx(element);
    const dialog = this.doctorsDialog.open(PatientDoctorsListComponent);
    dialog.updateSize('1000px', '600');

  }

  predefDialog() {
    const dialog = this.predefExaminaitonDialog.open(PredefExaminationComponent);
    dialog.updateSize('1000px', '600');
  }

}
