export class RecordTable{
    height: string;
  weight:string;
  bloodType: string;
  allergies:string;
 reports:string;

   constructor(height: string,weight:string,bloodType:string,allergies:string,reports:string) {
     this.height=height;
     this.weight=weight;
     this.bloodType=bloodType;
     this.allergies=allergies;
     this.reports=reports;
 }
}