export class Doctor {

    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    address: string;
    city: string;
    country: string;
    specialization: string;
  
    constructor(email: string, password: string, name: string, surname: string, number1: string, address: string, city: string, country: string, specialization: string) {
      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;
      this.address = address;
      this.city = city;
      this.country = country;
      this.specialization = specialization;
    }
  }