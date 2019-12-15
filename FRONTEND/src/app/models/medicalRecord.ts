import { Patient } from './patient';
import { NumberValueAccessor } from '@angular/forms';

export class MedicalRecord{
    height:number;
    weight:number;
    bloodType:string;
    allergies:string;
    patient:Patient;

    constructor(height:number,weight:number,bloodType:string,allergies:string,patient:Patient){
        this.height=height;
        this.weight=weight;
        this.bloodType=bloodType;
        this.allergies=allergies;
        this.patient=patient;
    }
}