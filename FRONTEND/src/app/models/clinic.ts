import { Doctor } from './doctor';
import { ExaminationType } from './examinationType';

export class Clinic {
  id: number;
  name: string;
  address: string;
  description: string;
  clinicRating: number;
  doctors: Array<Doctor> = new Array<Doctor>();
  examinationTypes: Array<ExaminationType> = new Array<ExaminationType>();

  constructor(name: string, address: string, description: string, doctors: Array<Doctor>, examinationTypes?: Array<ExaminationType>, clinicRating?: number, id?: number) {
    this.name = name;
    this.address = address;
    this.description = description;
    this.doctors = doctors;
    this.clinicRating = clinicRating;
    this.examinationTypes = examinationTypes;
    this.id = id;
  }
}