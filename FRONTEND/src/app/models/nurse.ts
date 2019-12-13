import { Settings } from 'http2';

export class Nurse{
    
    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    city: string;
    adress: string;
    country: string;
  address: any;
  
    constructor(email: string, password: string, name: string, surname: string, number1: string, city: string, adress: string, country:string) {
      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;
      this.address = adress;
      this.city = city;
      this.country = country;
      
    }
}