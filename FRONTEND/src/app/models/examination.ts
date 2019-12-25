import { Doctor } from './doctor';
import { Nurse } from './nurse';
import { Patient } from './patient';
import { ExaminationType } from './examinationType';
import { Room } from './room';

export class Examination {
    id: number;
    kind: String;
  //  interval: DateTimeInterval;
    status: String;
    examinationType: ExaminationType;
   // doctors: Doctor[];
  //  room: Room;
    discount: number;
    nurse: Nurse;
    patient: Patient;
    constructor(id: number, kind: String,  status: String,
         discount: number,patient:Patient,examinationType:ExaminationType) {
        this.id = id;
        this.kind = kind;
        this.status = status;
        this.examinationType = examinationType;
    //    this.room = room;
        this.discount = discount;
  //      this.nurse = nurse;
        this.patient = patient;
    }
}