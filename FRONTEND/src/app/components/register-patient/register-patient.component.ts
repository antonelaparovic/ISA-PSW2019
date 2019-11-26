import { Component, OnInit, Injectable} from '@angular/core';
import { Patient} from '../../models/patient';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {PatientStatus} from '../../models/patientStatus';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  patient: Patient;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.minLength(9)]),
      insuranceID: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.patient = new Patient(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
      this.f.address.value,
      this.f.city.value,
      this.f.country.value,
      this.f.insuranceID.value,
      PatientStatus.AWAITING
    );

    this.createPatient();
  }

  private createPatient() {
    this.patientService.addPatient(this.patient).subscribe(
      data => {
        this.router.navigate(['/patient/login']);
      },
      error => {
        alert('Error registration patient');
      }
    );
  }

}