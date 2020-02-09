export class ExaminationTable{
     kind: string;
   doctors:string;
   clinic: string;
   label:string;
   price:string;

    constructor(kind: string,doctors:string,clinic:string,label:string,price:string) {
      this.kind = kind;
      this.doctors=doctors;
      this.clinic=clinic;
      this.label=label;
      this.price=price;
  }
}