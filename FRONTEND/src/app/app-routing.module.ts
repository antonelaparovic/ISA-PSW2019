import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {RegisterPatientComponent} from './components/register-patient/register-patient.component'
import {PatientPageComponent} from './components/patient-page/patient-page.component'
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import {PatientProfileComponent} from './components/patient-profile/patient-profile.component'
import { MedicalRecordPageComponent } from './components/medical-record-page/medical-record-page.component';
import { MedicalHistoryPageComponent } from './components/medical-history-page/medical-history-page.component';
import { ClinicsPageComponent } from './components/clinics-page/clinics-page.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import {NursePageComponent} from './components/nurse-page/nurse-page.component';
import {NurseProfileComponent} from './components/nurse-profile/nurse-profile.component';
import {CCAdminProfileComponent} from './components/ccadmin-profile/ccadmin-profile.component';
import {AllPatientsPageComponent} from './components/allpatients-page/allpatients-page.component';
import { CodebookComponent} from './components/codebook/codebook.component';

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
    path:'clinicalCenterAdministrator/profile',
    component: CCAdminProfileComponent
  },
<<<<<<< Updated upstream
=======

  {
    path:'clinicalCenterAdministrator/codebook',
    component: CodebookComponent
  },
  

>>>>>>> Stashed changes
  {
    path:'doctor/profile',
    component: DoctorProfileComponent
  },
  {
    path:'nurse/home',
    component: NursePageComponent
  },
  {
    path:'nurse/profile',
    component: NurseProfileComponent
  },{
    path:'nurse/allpatients',
    component: AllPatientsPageComponent
  },
  {
    path:'patient/profile',
    component: PatientProfileComponent
  },{
    path:'patient/medicalRecord',
    component: MedicalRecordPageComponent
  },{
    path:'patient/medicalHistory',
    component: MedicalHistoryPageComponent
  },{
    path:'patient/clinics',
    component: ClinicsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
