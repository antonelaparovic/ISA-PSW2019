export class ExaminationTable{
     kind: string;
   doctors:string;
   clinic: string;

    constructor(kind: string,doctors:string,clinic:string) {
      this.kind = kind;
      this.doctors=doctors;
      this.clinic=clinic;
  }
}