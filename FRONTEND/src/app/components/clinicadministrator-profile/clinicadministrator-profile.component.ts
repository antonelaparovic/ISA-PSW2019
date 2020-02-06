import { Component, OnInit } from '@angular/core';
import { ClinicAdministrator } from 'src/app/models/clinicadministrator';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ClinicAdministratorService } from 'src/app/services/clinicadministrator.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-clinicadministrator-profile',
  templateUrl: './clinicadministrator-profile.component.html',
  styleUrls: ['./clinicadministrator-profile.component.css']
})
export class ClinicAdministratorProfileComponent implements OnInit {

  clinicAdministratorForm: FormGroup;
  submitted = false;
  selectedClinicAdministrator: ClinicAdministrator;
  user:User;
  clinicAdministrator:ClinicAdministrator;

  constructor(
    private clinicadministratorService: ClinicAdministratorService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.user=JSON.parse(userService.isLoggedIn());
    console.log(this.user);
    this.selectedClinicAdministrator=clinicadministratorService.getClinicAdministrator(this.user.email);
    console.log(this.selectedClinicAdministrator);
   }

  ngOnInit() {
    this.clinicAdministratorForm = this.formBuilder.group({
      email: new FormControl(this.selectedClinicAdministrator.email, [Validators.required, Validators.email]),
      password: new FormControl(this.selectedClinicAdministrator.password, [Validators.required, Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]),
      name: new FormControl(this.selectedClinicAdministrator.name, [Validators.required]),
      surname: new FormControl(this.selectedClinicAdministrator.surname, [Validators.required]),
      number: new FormControl(this.selectedClinicAdministrator.number, [Validators.required, Validators.minLength(9)]),
      clinic: new FormControl(this.selectedClinicAdministrator.clinic, [Validators.required]),
    });
  }

  get f() {
    return this.clinicAdministratorForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.clinicAdministratorForm.invalid) {
      return;
    }

    this.clinicAdministrator = new ClinicAdministrator(
      this.f.email.value,
      this.f.password.value,
      this.f.name.value,
      this.f.surname.value,
      this.f.number.value,
      this.f.clinic.value,
      
    );

    this.user=new User(this.f.email.value,this.f.password.value,Role.CLINICADMINISTRATOR);
    
    this.editClinicAdministrator();
    
  }

    public editClinicAdministrator(){
      this.clinicadministratorService.editClinicAdministrator(this.clinicAdministrator).subscribe(
        data => {
          this.userService.setUser(this.user);
          this.clinicadministratorService.setClinicAdministrator(this.clinicAdministrator);
          this.router.navigate(['/clinicadministrator/home']);
        },
        error => {
          alert('Error edit clinicadministrator');
        }
      );
    }

 

}
