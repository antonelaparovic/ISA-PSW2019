import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {UserService} from '../app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private userService:UserService) { }

  public isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  public isNone(){
    return this.userService.isNone();
  }

  public isPatient() {
    return this.userService.isPatient();
  }

  public isDoctor() {
    return this.userService.isDoctor();
  }

  public isClinicAdministrator() {
    return this.userService.isClinicAdministrator();
  }

  public isNurse() {
    return this.userService.isNurse();
  }
  
  public isCCAdmin() {
    return this.userService.isCCAdmin();
  }
  public onLogout() {
    this.userService.logout();
  }

}

