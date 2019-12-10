import { Component, OnInit } from '@angular/core';
import { Nurse } from '../../models/nurse';
import { User } from '../../models/user';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { NurseService } from '../../services/nurse.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Role } from '../../models/role';

@Component({
  selector: 'app-nurse-profile',
  templateUrl: './nurse-profile.component.html',
  styleUrls: ['./nurse-profile.component.css']
})
export class NurseProfileComponent implements OnInit {

  nurseForm: FormGroup;
  submitted = false;
  selectedNurse: Nurse;
  user:User;
  nurse:Nurse;

  constructor(
    private nurseService: NurseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.user=JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedNurse=nurseService.getNurse(this.user.email);
    console.log(this.selectedNurse);
   }

  ngOnInit() {
    this.nurseForm = this.formBuilder.group({
      email: new FormControl(this.selectedNurse.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedNurse.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedNurse.name, [Validators.required]),
      surname: new FormControl(this.selectedNurse.surname, [Validators.required]),
      number: new FormControl(this.selectedNurse.number, [Validators.required, Validators.minLength(9)]),
    });
  }

  get f() {
    return this.nurseForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.nurseForm.invalid) {
      return;
    }

    this.nurse = new Nurse(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
    );

    this.user=new User(this.f.email.value,this.f.password.value,Role.DOCTOR);

    this.editNurse();

  }

    public editNurse(){
      this.nurseService.editNurse(this.nurse).subscribe(
        data => {
          this.userService.setUser(this.user);
          this.nurseService.setNurse(this.nurse);
          this.router.navigate(['/nurse/home']);
        },
        error => {
          alert('Error while editing nurse.');
        }
      );
    }



}
