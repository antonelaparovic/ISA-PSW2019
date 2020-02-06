export class Clinicadministrator {

    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    clinic: number;
  
    constructor(email: string, password: string, name: string, surname: string, number: string, clinic: number) {
      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number;
      this.clinic = clinic;
    }
  }