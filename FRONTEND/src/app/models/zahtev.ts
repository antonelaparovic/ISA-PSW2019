import {Clinic} from './clinic';
import {Doctor} from './doctor';
import {Nurse} from './nurse';
import {ZahtevStatus} from './zahtevStatus';

export class Zahtev {

  email: string;
  name: string;
  surname: string;
  startingDate: string;
  finishDate: string;

  status: ZahtevStatus;
  constructor(email: string, name: string, surname: string, startingDate: string, finishDate: string, status: ZahtevStatus) {

    this.email = email;
    this.name = name;
    this.surname = surname;
    this.startingDate = startingDate;
    this.finishDate = finishDate;
    this.status = status;
  }
}
