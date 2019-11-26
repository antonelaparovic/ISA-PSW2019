import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import { Router } from '@angular/router';


export class Patient{
  constructor(
    public email:string,
    public password: string
    ){}
}

@Component({
  selector: 'app-login-patient',
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.css']
})

export class LoginPatientComponent implements OnInit {

  private loading: false;
  private error: string;
  private success: string;
  private loginForm: FormGroup;
  private submitted = false;
  private patient: Patient;

  constructor(
    private PatientService: PatientService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.attempLogin();
  }

  public attempLogin(){
    this.PatientService.loginPatient(this.patient).subscribe(
      data => {
        if(data!=null){
          this.router.navigate(['']);
          console.log('Successful logged in');
        }else{
          console.log('Login error');
        }
      },
      error => {
        console.log('Request error');
      }
    );
  }
}
