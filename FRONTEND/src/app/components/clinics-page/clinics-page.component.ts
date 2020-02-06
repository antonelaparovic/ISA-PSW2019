import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Clinic } from 'src/app/models/clinic';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ClinicService } from 'src/app/services/clinic.service';
import { Doctor } from 'src/app/models/doctor';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { DoctorService } from 'src/app/services/doctor.service';
import { ClinicSearchComponent } from '../clinic-search/clinic-search.component';
import { PatientDoctorsListComponent } from '../patient-doctors-list/patient-doctors-list.component';

@Component({
  selector: 'app-clinics-page',
  templateUrl: './clinics-page.component.html',
  styleUrls: ['./clinics-page.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClinicsPageComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Address', 'ClinicRating', 'Price', 'Doctors'];
  clinic: Clinic;
  clinicDataSource = new MatTableDataSource<Clinic>();
  doctorDataSource=new MatTableDataSource<Doctor>();

  clinics: Array<Clinic> = new Array<Clinic>();
  doctors: Array<Doctor> = new Array<Doctor>();

  condition: boolean;

  tmp: string;
  tmp1: string;
  @Input() doctorListComponent: PatientDoctorsListComponent;
  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private clinicService: ClinicService,
    private doctorService: DoctorService,
    public dialog: MatDialog
  ) {
    this.clinics=this.clinicService.getAllClinics();
    console.log(this.clinics);
    this.doctors = this.doctorService.getAllDoctors();
    this.condition=true;
    this.all();
  }

  ngOnInit() {
    this.all();
    this.clinicDataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.clinicDataSource.filter = filterValue.trim().toLowerCase();
    if (this.clinicDataSource.paginator) {
      this.clinicDataSource.paginator.firstPage();
    }
  }

  all() {
      this.clinicDataSource = new MatTableDataSource(this.clinicService.getAllClinics());
  }

  openDialog() {
    const dialog = this.dialog.open(ClinicSearchComponent);
    dialog.afterClosed().subscribe(data => {
       if (data !== undefined) {
         this.clinics = data.clinics;
         this.clinicDataSource = new MatTableDataSource(this.clinics);
         this.condition = false;
         this.tmp = data.date;
       }
      }
    );
  }

  doctorList(element: Clinic) {
    this.doctorService.setDoctorss(element.doctors);
    console.log(element);
    for (const d of element.doctors) {
     //  this.tmp1 = this.doctorService.getDoctorsTermins(this.tmp, d.email);
     //  console.log(this.tmp1);
    }
    const dialog = this.dialog.open(PatientDoctorsListComponent);

  }

}
