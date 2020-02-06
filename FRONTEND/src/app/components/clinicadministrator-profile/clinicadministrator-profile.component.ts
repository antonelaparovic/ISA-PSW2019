import { Component, OnInit } from '@angular/core';
import { Clinicadministrator } from 'src/app/models/clinicadministrator';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ClinicadministratorService } from 'src/app/services/clinicadministrator.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-clinicadministrator-profile',
  templateUrl: './clinicadministrator-profile.component.html',
  styleUrls: ['./clinicadministrator-profile.component.css']
})
export class ClinicadministratorProfileComponent implements OnInit {

  clinicadministratorForm: FormGroup;
  submitted = false;
  selectedClinicadministrator: Clinicadministrator;
  user:User;
  clinicadministrator:Clinicadministrator;

  constructor(
    private clinicadministratorService: ClinicadministratorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.user=JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedClinicadministrator=clinicadministratorService.getClinicadministrator(this.user.email);
    console.log(this.selectedClinicadministrator);
   }

  ngOnInit() {
    this.clinicadministratorForm = this.formBuilder.group({
      email: new FormControl(this.selectedClinicadministrator.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedClinicadministrator.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedClinicadministrator.name, [Validators.required]),
      surname: new FormControl(this.selectedClinicadministrator.surname, [Validators.required]),
      number: new FormControl(this.selectedClinicadministrator.number, [Validators.required, Validators.minLength(9)]),
      clinic: new FormControl(this.selectedClinicadministrator.clinic, [Validators.required]),
    });
  }

  get f() {
    return this.clinicadministratorForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.clinicadministratorForm.invalid) {
      return;
    }

    this.clinicadministrator = new Clinicadministrator(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
      this.f.clinic.value,
      
    );

    this.user=new User(this.f.email.value,this.f.password.value,Role.CLINICADMINISTRATOR);
    
    this.editClinicadministrator();
    
  }

    public editClinicadministrator(){
      this.clinicadministratorService.editClinicadministrator(this.clinicadministrator).subscribe(
        data => {
          this.userService.setUser(this.user);
          this.clinicadministratorService.setClinicadministrator(this.clinicadministrator);
          this.router.navigate(['/clinicadministrator/home']);
        },
        error => {
          alert('Error edit clinicadministrator');
        }
      );
    }

 

}
