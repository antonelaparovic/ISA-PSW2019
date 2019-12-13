import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { User } from '../../models/user';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctorForm: FormGroup;
  submitted = false;
  selectedDoctor: Doctor;
  user:User;
  doctor:Doctor;

  constructor(
    private doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.user=JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedDoctor=doctorService.getDoctor(this.user.email);
    console.log(this.selectedDoctor);
   }

  ngOnInit() {
    this.doctorForm = this.formBuilder.group({
      email: new FormControl(this.selectedDoctor.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedDoctor.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedDoctor.name, [Validators.required]),
      surname: new FormControl(this.selectedDoctor.surname, [Validators.required]),
      number: new FormControl(this.selectedDoctor.number, [Validators.required, Validators.minLength(9)]),
      address: new FormControl(this.selectedDoctor.address, [Validators.required]),
      city: new FormControl(this.selectedDoctor.city, [Validators.required]),
      country: new FormControl(this.selectedDoctor.country, [Validators.required]),
      specialization: new FormControl(this.selectedDoctor.specialization, [Validators.required]),
    });
  }

  get f() {
    return this.doctorForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.doctorForm.invalid) {
      return;
    }

    this.doctor = new Doctor(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
      this.f.address.value,
      this.f.city.value,
      this.f.country.value,
      this.f.specialization.value
    );

    this.user=new User(this.f.email.value,this.f.password.value,Role.DOCTOR);
    
    this.editDoctor();
    
  }

    public editDoctor(){
      this.doctorService.editDoctor(this.doctor).subscribe(
        data => {
          this.userService.setUser(this.user);
          this.doctorService.setDoctor(this.doctor);
          this.router.navigate(['/doctor/home']);
        },
        error => {
          alert('Error edit doctor');
        }
      );
    }

 

}
