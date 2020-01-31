export class ClinicAdministrator {

    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    clinic: string;
  
    constructor(email: string, password: string, name: string, surname: string, phone: string, clinic: string) {
      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.phone = phone;
      this.clinic = clinic;
    }
  }