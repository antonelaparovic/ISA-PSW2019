import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {Role} from '../../models/role';
import {UserService} from '../../services/user.service';
import {DoctorService} from '../../services/doctor.service';


export class Patient{
  constructor(
    public email:string,
    public password: string
    ){}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private submitted = false;
  private patient: Patient;
  private user:User;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private doctorService:DoctorService
  ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  private onSubmit(){
    this.submitted=true;

    if(this.loginForm.invalid)
    return;
  

  this.patient=new Patient(
    this.f.email.value,
    this.f.password.value
  )
    this.user=this.userService.getUser(this.f.email.value);
    console.log(this.user);
    this.attemptLogin();
  }

  public attemptLogin() {
    if (this.user.role === Role.PATIENT) {
      console.log(this.user);
      this.patientService.loginPatient(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            console.log('Successful logged in');
            this.router.navigate(['/patient/home']);
          } else {
            console.log('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    } else if (this.user.role === Role.DOCTOR) {
      console.log(this.user);
      this.doctorService.loginDoctor(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            console.log('Successful logged in');
            this.router.navigate(['/doctor/home']);
          } else {
            console.log('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
