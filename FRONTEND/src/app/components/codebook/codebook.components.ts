import { Component, OnInit } from '@angular/core';
import { ClinicalCenterAdministratorService } from '../../services/clinicalCenterAdministrator.service';
import { CodebookDTO } from '../codebook-dto'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MedicalHistoryPageComponent } from '../medical-history-page/medical-history-page.component';


@Component({
  selector: 'app-codebook',
  templateUrl: './codebook.components.html',
  styleUrls: ['./codebook.components.css']
})
export class CodebookComponent implements OnInit {

  constructor(private codebookService: ClinicalCenterAdministratorService, private formBuilder: FormBuilder) { }
  addMedicine : FormGroup;
  addDiagnose : FormGroup;
  codebook : any;

  ngOnInit() {

    this.addMedicine  = this.formBuilder.group({
      'label' : new FormControl('', Validators.required)
    });

    this.addDiagnose = this.formBuilder.group({
      'name' : new FormControl('', Validators.required)
    });

    this.codebookService.returnCodebook().subscribe(data =>{
      this.codebookService = data;
    },
    error=>{}
    )


  }
  addCodebookMedicine(){
    var si = new CodebookDTO();
    si.medicine = new Object();
    si.medicine.name = this.addMedicine.value.name;
    this.codebookService.addCodebook(si).subscribe(data=>{this.codebookService = data});
  }

  deleteMedicine(medicine : any){
    var si = new CodebookDTO();
    si.medicine = medicine;
    //alert(JSON.stringify(si));
    this.codebookService.deleteCodebook(si).subscribe(data=>{this.codebookService = data});
  }

  addCodebookDiagnose() {
    var codebook = new CodebookDTO();
    codebook.diagnose = new Object();
    codebook.diagnose.name = this.addDiagnose.value.name;
    this.codebookService.addCodebook(codebook).subscribe(data=>{this.codebook = data});
  }

  deleteDiagnose(diagnose : any) {
    var codebook = new CodebookDTO();
    codebook.diagnose = diagnose;
    this.codebookService.deleteCodebook(codebook).subscribe(data=>{this.codebookService = data});
  }

}
