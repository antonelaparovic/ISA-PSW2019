import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicalRecord } from 'src/app/models/medicalRecord';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MedicalRecordService } from 'src/app/services/medical-record.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

export class Table{
  height:number;
    weight:number;
    bloodType:string;
    allergies:string;

    constructor(height:number,weight:number,bloodType:string,allergies:string){
        this.height=height;
        this.weight=weight;
        this.bloodType=bloodType;
        this.allergies=allergies;
    }

}

@Component({
  selector: 'app-medical-record-page',
  templateUrl: './medical-record-page.component.html',
  styleUrls: ['./medical-record-page.component.css']
})
export class MedicalRecordPageComponent implements OnInit {


  displayedColumns: string[] = ['Height', 'Weight','BloodType','Allergies'];
  dataSource= new MatTableDataSource<MedicalRecord>();
  record:MedicalRecord;
  records:Array<MedicalRecord>=new Array<MedicalRecord>();
  listTable:Array<Table>=new Array<Table>();
  user:User;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private medicalRecordService:MedicalRecordService,
    private userService:UserService
  ) { 
    this.records=this.medicalRecordService.getAllRecords();
    this.user=JSON.parse(userService.isLoggedIn());
  }

  ngOnInit() {
    this.all();
  }

  all() {
    this.fillData();
    this.dataSource = new MatTableDataSource(this.listTable);
}

fillData(){
  /*for (let i = 0; i < this.records.length; i++) {
    const element = this.records[i];
          const table=new Table(element.height,element.weight,element.bloodType,element.allergies);
          this.listTable.push(table);
          
  }*/
  const table=new Table(180,85,"A+","No allergies");
  this.listTable.push(table);
}

}
