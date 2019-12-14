
export class Nurse{
    
    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    city: string;
    address: string;
    country: string;
  

    constructor(email: string, password: string, name: string, surname: string, number1: string, address: string, city: string, country: string) {

      this.email = email;
      this.name = name;
      this.password = password;
      this.surname = surname;
      this.number = number1;

      this.address = address;
      this.city = city;
      this.country = country;

    }
}