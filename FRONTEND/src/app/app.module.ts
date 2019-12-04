
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
import { MedicalRecordPageComponent } from './components/medical-record-page/medical-record-page.component';
import { MedicalHistoryPageComponent } from './components/medical-history-page/medical-history-page.component';
import { ClinicsPatientPageComponent } from './components/clinics-patient-page/clinics-patient-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPatientComponent,
    PatientPageComponent,
    DoctorPageComponent,
    PatientProfileComponent,
    MedicalRecordPageComponent,
    MedicalHistoryPageComponent,
    ClinicsPatientPageComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

