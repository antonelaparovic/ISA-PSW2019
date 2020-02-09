import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-patient-doctor-search',
  templateUrl: './patient-doctor-search.component.html',
  styleUrls: ['./patient-doctor-search.component.css']
})
export class PatientDoctorSearchComponent implements OnInit {


  SearchDoctorGroup: FormGroup;
  doctors: Array<Doctor> = new Array<Doctor>();
  constructor(private formBuilder: FormBuilder,
              private doctorService: DoctorService,
              private dialogRef: MatDialogRef<PatientDoctorSearchComponent>,
              @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit() {
    this.SearchDoctorGroup = this.formBuilder.group({
      name: new FormControl(''),
      surname: new FormControl(''),
      rating: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1),
        Validators.pattern('[0-5]*')]),
    });
  }

  get f() {
    return this.SearchDoctorGroup.controls;
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.SearchDoctorGroup.invalid) {
      return;
    }

    this.doctors = this.doctorService.getDoctorsWithSearch(this.f.name.value, this.f.surname.value, this.f.rating.value);
    console.log(this.doctors);
    this.dialogRef.close(this.doctors);
  }
}
