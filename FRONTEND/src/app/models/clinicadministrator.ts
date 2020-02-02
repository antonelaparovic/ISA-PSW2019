export class Clinicadministrator {

    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    clinic: string;
  
    constructor(email: string, password: string, name: string, surname: string, number: string, clinic: string) {
      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number;
      this.clinic = clinic;
    }
  }