import { Clinic } from './clinic';

export class ClinicAdministrator {
    email: string;
    password: string;
    name: string;
    surname: string;
    number: string;
    clinic: Clinic;

    constructor(email: string, password: string, name: string, surname: string, number1: string, clinic?: Clinic) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.number = number1;
        this.clinic = clinic;
    }
}