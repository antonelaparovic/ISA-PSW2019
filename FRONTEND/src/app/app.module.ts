
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import {DemoMaterialModule} from './material-module';

import { LoginComponent } from './components/login/login.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
import { DoctorPageComponent } from './components/doctor-page/doctor-page.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { MedicalRecordPageComponent } from './components/medical-record-page/medical-record-page.component';
import { MedicalHistoryPageComponent } from './components/medical-history-page/medical-history-page.component';
import { ClinicsPageComponent } from './components/clinics-page/clinics-page.component';
import {NursePageComponent} from './components/nurse-page/nurse-page.component';
import {NurseProfileComponent} from './components/nurse-profile/nurse-profile.component';
import { CCAdminProfileComponent } from './components/ccadmin-profile/ccadmin-profile.component';
import { AllPatientsPageComponent } from './components/allpatients-page/allpatients-page.component';
<<<<<<< Updated upstream

=======
import { CodebookComponent } from './components/codebook/codebook.component';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPatientComponent,
    PatientPageComponent,
    DoctorPageComponent,
    PatientProfileComponent,
    DoctorProfileComponent,
    MedicalRecordPageComponent,
    MedicalHistoryPageComponent,
    ClinicsPageComponent,
    NursePageComponent,
    NurseProfileComponent,
    CCAdminProfileComponent,
    AllPatientsPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule,
  ],
  entryComponents: [
    CCAdminProfileComponent,
    AllPatientsPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

