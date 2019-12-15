export class ExaminationTable{
    id:number;
     kind: String;
  interval: String;
    status: String;
  examinationType: String;
   doctors: String;
   room: String;
    discount: String;
  nurse: String;
    patient: String;

    constructor(id:number,kind: String,  status: String, examinationType: String,
      room: String, discount: String, nurse: String, patient: String,doctors:String,interval:String) {
      this.id=id;
      this.kind = kind;
      this.status = status;
      this.examinationType = examinationType;
      this.room = room;
      this.discount = discount;
      this.nurse = nurse;
      this.patient = patient;
      this.doctors=doctors;
      this.interval=interval;
  }
}