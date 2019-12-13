import { Settings } from 'http2';

export class Nurse{
    
    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
<<<<<<< Updated upstream
    city: string;
    adress: string;
    country: string;
  address: any;
  
    constructor(email: string, password: string, name: string, surname: string, number1: string, city: string, adress: string, country:string) {
=======
    address: string;
    city: string;
    country: string;
  
    constructor(email: string, password: string, name: string, surname: string, number1: string, address: string, city: string, country: string) {
>>>>>>> Stashed changes
      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;
<<<<<<< Updated upstream
      this.address = adress;
      this.city = city;
      this.country = country;
=======
      this.country=country;
      this.city=city;
      this.address=address;
>>>>>>> Stashed changes
      
    }
}