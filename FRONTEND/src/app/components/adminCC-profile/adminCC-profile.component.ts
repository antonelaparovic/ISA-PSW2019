import { Component, OnInit } from '@angular/core';
import { AdminCC } from '../../models/adminCC';
import { User } from '../../models/user';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AdminCCService } from '../../services/adminCC.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Role } from '../../models/role';

@Component({
selector: 'app-adminCC-profile',
templateUrl: './adminCC-profile.component.html',
styleUrls: ['./adminCC-profile.component.css']
})
export class AdminCCProfileComponent implements OnInit {

adminCCForm: FormGroup;
submitted = false;
selectedAdminCC: AdminCC;
user:User;
adminCC:AdminCC;

constructor(
    private adminCCService: AdminCCService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.user=JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedAdminCC=adminCCService.getAdminCC(this.user.email);
    console.log(this.selectedAdminCC);
   }

  ngOnInit() {
    this.adminCCForm = this.formBuilder.group({
      email: new FormControl(this.selectedAdminCC.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedAdminCC.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedAdminCC.name, [Validators.required]),
      surname: new FormControl(this.selectedAdminCC.surname, [Validators.required]),
      number: new FormControl(this.selectedAdminCC.number, [Validators.required, Validators.minLength(9)]),
    });
  }

  get f() {
    return this.adminCCForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.adminCCForm.invalid) {
      return;
    }

    this.adminCC = new AdminCC(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
    );

    this.user=new User(this.f.email.value,this.f.password.value,Role.DOCTOR);

    this.editAdminCC();

  }

    public editAdminCC(){
      this.adminCCService.editAdminCC(this.adminCC).subscribe(
        data => {
          this.userService.setUser(this.user);
          this.adminCCService.setAdminCC(this.adminCC);
          this.router.navigate(['/adminCC/home']);
        },
        error => {
          alert('Error while editing adminCC.');
        }
      );
    }



}
