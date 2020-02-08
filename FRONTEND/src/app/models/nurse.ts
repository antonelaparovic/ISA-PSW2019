import { Time } from '@angular/common';

export class Nurse{
    
    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    city: string;
    address: string;
    country: string;
    workHoursTo: Time;
    workHoursFrom: Time;
  

    constructor(email: string, password: string, name: string, surname: string, number1: string, address: string, city: string, country: string, workHoursTo: Time, workHoursFrom: Time) {

      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;

      this.address = address;
      this.city = city;
      this.country = country;
      this.workHoursFrom = workHoursFrom;
      this.workHoursTo = workHoursTo;

    }
}