import { Component, OnInit, ViewChild } from '@angular/core';
import { Examination } from 'src/app/models/examination';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ExaminationService } from 'src/app/services/examination.service';
import { ExaminationTable } from 'src/app/models/examinationTable';


@Component({
  selector: 'app-medical-history-page',
  templateUrl: './medical-history-page.component.html',
  styleUrls: ['./medical-history-page.component.css']
})
export class MedicalHistoryPageComponent implements OnInit {

  displayedColumns: string[] = ['Kind', 'Status','Type','Room','Discount','Nurse','Doctors'];
  examination:Examination;
  dataSource= new MatTableDataSource<ExaminationTable>();
  examinations:Array<Examination>=new Array<Examination>();
  listEx:Array<ExaminationTable>=new Array<ExaminationTable>();
  exTable:ExaminationTable;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private examinationService:ExaminationService
  ) {
    this.examinations=this.examinationService.getAllExaminations();
    console.log("medicalHPage  "+this.examinations)
    this.all();
   }

  ngOnInit() {
    this.all();
  }

  all() {
    this.fillData();
    this.dataSource = new MatTableDataSource(this.listEx);
    this.dataSource.paginator = this.paginator;
}

  fillData(){
    for (let i = 0; i < this.examinations.length; i++) {
      const element = this.examinations[i];
      const exaTable=new ExaminationTable(this.examinations[i].id,this.examinations[i].kind,this.examinations[i].status,"type","room1","0","nurse1","patient1","doctor1,doctor2","0");
      let truee=0;
      for (let j = 0; j < this.listEx.length; j++) {
        const elemente = this.listEx[j];
        if(elemente.id===exaTable.id)
            {truee=1;}
      }
      if(truee===0)    {
        this.listEx.push(exaTable);
      }
  }

}
}