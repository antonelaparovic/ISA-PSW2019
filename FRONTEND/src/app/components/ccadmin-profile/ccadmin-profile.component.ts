import { Component, OnInit } from '@angular/core';
import { ClinicalCenterAdministrator } from '../../models/clinicalCenterAdministrator';
import { User } from '../../models/user';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ClinicalCenterAdministratorService } from '../../services/clinicalCenterAdministrator.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Role } from '../../models/role';



@Component({
  selector: 'app-ccadmin-profile',
  templateUrl: './ccadmin-profile.component.html',
  styleUrls: ['./ccadmin-profile.component.css']
})
export class CCAdminProfileComponent implements OnInit {

  ccadminForm: FormGroup;
  submitted = false;
  selectedCCAdmin: ClinicalCenterAdministrator;
  user:User;
  clinicalCenterAdministrator:ClinicalCenterAdministrator;

  constructor(
    private ccadminService: ClinicalCenterAdministratorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.user=JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedCCAdmin=ccadminService.getCCAdmin(this.user.email);
    console.log(this.selectedCCAdmin);
   }

  ngOnInit() {
    this.ccadminForm = this.formBuilder.group({
      email: new FormControl(this.selectedCCAdmin.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedCCAdmin.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedCCAdmin.name, [Validators.required]),
      surname: new FormControl(this.selectedCCAdmin.surname, [Validators.required]),
      number: new FormControl(this.selectedCCAdmin.number, [Validators.required, Validators.minLength(9)]),
     });
  }

  get f() {
    return this.ccadminForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.ccadminForm.invalid) {
      return;
    }

    this.clinicalCenterAdministrator = new ClinicalCenterAdministrator(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value
    );

    this.user=new User(this.f.email.value,this.f.password.value,Role.CCADMIN);
    
    this.editClinicalCenterAdministrator();
    
  }

    public editClinicalCenterAdministrator(){
      this.ccadminService.editCCAdmin(this.clinicalCenterAdministrator).subscribe(
        data => {
          this.userService.setUser(this.user);
          this.ccadminService.setCCAdmin(this.clinicalCenterAdministrator);
          this.router.navigate(['/clinicalCenterAdministrator/profile']);
        },
        error => {
          alert('Error edit clinical center administrator');
        }
      );
    }

 


}
