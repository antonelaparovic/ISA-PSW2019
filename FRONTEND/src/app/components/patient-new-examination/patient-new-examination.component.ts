import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExaminationTypeService } from 'src/app/services/examination-type.service';
import { ExaminationService } from 'src/app/services/examination.service';
import { ExaminationType } from 'src/app/models/examinationType';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ExaminationKind } from 'src/app/models/examinationKind';
import { ClinicService } from 'src/app/services/clinic.service';
import { Clinic } from 'src/app/models/clinic';

@Component({
  selector: 'app-patient-new-examination',
  templateUrl: './patient-new-examination.component.html',
  styleUrls: ['./patient-new-examination.component.css']
})
export class PatientNewExaminationComponent implements OnInit {


  MakeGroup: FormGroup;
  termins: Array<string> = new Array<string>();
  kinds: Array<string> = new Array<string>();
  doctor: Doctor;
  date: string;
  user: User;
  clinic: Clinic;
  type: string;
  k = 'Examination';
  k1 = 'Operation';
  adminsClinic = '';

  constructor(private dialogRef: MatDialogRef<PatientNewExaminationComponent>,
              private doctorService: DoctorService,
              private clinicService: ClinicService,
              private formBuilder: FormBuilder,
              private examinationServce: ExaminationService,
              private userService: UserService,
              @Inject(MAT_DIALOG_DATA) data) {
      this.doctor = doctorService.getDoctorEx();
      this.date = doctorService.getDate();
      this.termins = doctorService.getDoctorsTermins(this.date, this.doctor.email);
      this.user = userService.getLoggedUser();
      this.type = clinicService.getType();
      this.clinic = clinicService.getClinicEx();
      this.kinds = new Array<string>();
      this.kinds.push(this.k);
      this.kinds.push(this.k1);
  }

  ngOnInit() {
    this.MakeGroup = this.formBuilder.group({
      terminTime: new FormControl(''),
      kind: new FormControl('')
    });
  }


  get f() {
    return this.MakeGroup.controls;
  }

  save() {
    if (this.MakeGroup.invalid) {
      return;
    }

    const kindTest = this.f.kind.value;
    const interval = this.f.terminTime.value;

    const finalAdminClinic = this.adminsClinic.substring(0, this.adminsClinic.length - 1);
    console.log(finalAdminClinic);

    this.examinationServce.newExamination(interval, this.user.email, this.doctor.email, this.type, this.clinic.id.toString(), kindTest).subscribe(data => {
      this.dialogRef.close();
    }, error => {
      console.log(error);
    });
  }
  close() {
    this.dialogRef.close();
  }

}
