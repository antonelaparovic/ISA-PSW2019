export class Doctor {

    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
  
    constructor(email: string, password: string, name: string, surname: string, number1: string) {
      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;
    }
  }