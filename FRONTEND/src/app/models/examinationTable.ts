export class ExaminationTable{
    id:number;
     kind: String;
  interval: String;
    status: String;
  type: String;
   doctors: String;
   room: String;
    discount: String;
  nurse: String;
    patient: String;

    constructor(id:number,kind: String,  status: String, type: String,
      room: String, discount: String, nurse: String, patient: String,doctors:String,interval:String) {
      this.id=id;
      this.kind = kind;
      this.status = status;
      this.type = type;
      this.room = room;
      this.discount = discount;
      this.nurse = nurse;
      this.patient = patient;
      this.doctors=doctors;
      this.interval=interval;
  }
}