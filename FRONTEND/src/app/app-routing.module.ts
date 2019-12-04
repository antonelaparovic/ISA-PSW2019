import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {RegisterPatientComponent} from './components/register-patient/register-patient.component'
import {PatientPageComponent} from './components/patient-page/patient-page.component'
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import {PatientProfileComponent} from './components/patient-profile/patient-profile.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'patient/register',
    component: RegisterPatientComponent,
  },
  {
    path: 'patient/home',
    component: PatientPageComponent,
  },
  {
    path:'doctor/home',
    component: DoctorPageComponent
  },
  {
    path:'patient/profile',
    component: PatientProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
