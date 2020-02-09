import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import { Router } from '@angular/router';
import {User} from '../../models/user';
import {Role} from '../../models/role';
import {UserService} from '../../services/user.service';
import {DoctorService} from '../../services/doctor.service';
import { NurseService } from 'src/app/services/nurse.service';

import { MedicalRecordService } from 'src/app/services/medical-record.service';

import { ClinicalCenterAdministratorService } from 'src/app/services/clinicalCenterAdministrator.service';
import { ExaminationService } from 'src/app/services/examination.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';
import { Patient } from 'src/app/models/patient';
import { PatientStatus } from 'src/app/models/patientStatus';



export class LoginUser {
  constructor(
    public email: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  private submitted = false;
  private user:User;
  private loginUser:LoginUser;
  
  private patient: Patient;

  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private doctorService:DoctorService,
    private nurseService:NurseService,
    private examinationService:ExaminationService,
    private clinicService:ClinicService,
    private examinationTypeService:ExaminationTypeService,
    private recordService:MedicalRecordService,

    private ccadminService:ClinicalCenterAdministratorService,

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
  

  this.loginUser=new LoginUser(
    this.f.email.value,
    this.f.password.value
  )
    this.user=this.userService.getUser(this.f.email.value);
    console.log(this.user);
    this.attemptLogin();
  }

  public attemptLogin() {
    if (this.user.role === Role.PATIENT && this.loginUser.password === this.user.password) {
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
    } else if (this.user.role === Role.DOCTOR && this.loginUser.password === this.user.password) {
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
    } else if (this.user.role === Role.NURSE && this.loginUser.password === this.user.password) {
      console.log(this.user);
      this.nurseService.loginNurse(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            console.log('Successful logged in');
            this.router.navigate(['/nurse/home']);
          } else {
            console.log('Login error');
          }
        },
        error => {
          console.log(error);
        }
      );
    } else if (this.user.role === Role.CCADMIN && this.loginUser.password === this.user.password) {
      
    
      console.log(this.user);
      this.ccadminService.loginCCAdmin(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            console.log('Successful logged in as ccadmin');
            this.router.navigate(['/clinicalCenterAdministrator/profile']);
          } else {
            console.log('Login error as ccadmin');
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
