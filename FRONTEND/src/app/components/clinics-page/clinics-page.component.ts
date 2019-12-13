import { Component, OnInit, ViewChild } from '@angular/core';
import { Clinic } from 'src/app/models/clinic';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ClinicService } from 'src/app/services/clinic.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clinics-page',
  templateUrl: './clinics-page.component.html',
  styleUrls: ['./clinics-page.component.css']
})
export class ClinicsPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'address'];
  clinic: Clinic;
  clinicDataSource = new MatTableDataSource<Clinic>();
  clinics: Array<Clinic> = new Array<Clinic>();
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private clinicService: ClinicService
  ) {
  }

  ngOnInit() {
    this.all();

  }

  all() {
      this.clinicDataSource = new MatTableDataSource(this.clinicService.getAllClinics());
      this.clinicDataSource.paginator = this.paginator;
  }


}
