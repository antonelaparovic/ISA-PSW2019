import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPatientComponent} from './components/login-patient/login-patient.component'
import {RegisterPatientComponent} from './components/register-patient/register-patient.component'
const routes: Routes = [
  {
    path: '',
    component: LoginPatientComponent,
  },
  {
    path: 'patient/login',
    component: LoginPatientComponent,
  },
  {
    path: 'patient/register',
    component: RegisterPatientComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
