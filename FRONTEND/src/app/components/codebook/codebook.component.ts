import { Component, OnInit } from '@angular/core';
import { ClinicalCenterAdministratorService } from '../../services/clinicalCenterAdministrator.service';
import { CodebookDTO } from '../codebook-dto'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MedicalHistoryPageComponent } from '../medical-history-page/medical-history-page.component';


@Component({
  selector: 'app-codebook',
  templateUrl: './codebook.component.html',
  styleUrls: ['./codebook.component.css']
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
      'title' : new FormControl('', Validators.required)
    });

    this.codebookService.returnCodebook().subscribe(data =>{
      this.codebook = data;
      console.log(this.codebook);
    },
    error=>{}
    )


  }
  addCodebookMedicine(){
    var si = new CodebookDTO();
    console.log(si);
    si.medicine = new Object();
    si.medicine.label = this.addMedicine.value.label;
    this.codebookService.addCodebook(si).subscribe(data=>{this.codebook = data});
  }

  deleteMedicine(medicine : any){
    var si = new CodebookDTO();
    si.medicine = medicine;
    //alert(JSON.stringify(si));
    this.codebookService.deleteCodebook(si).subscribe(data=>{this.codebook = data});
  }

  addCodebookDiagnose() {
    var codebook = new CodebookDTO();
    codebook.diagnose = new Object();
    codebook.diagnose.title = this.addDiagnose.value.title;
    this.codebookService.addCodebook(codebook).subscribe(data=>{this.codebook = data});
  }

  deleteDiagnose(diagnose : any) {
    var codebook = new CodebookDTO();
    codebook.diagnose = diagnose;
    this.codebookService.deleteCodebook(codebook).subscribe(data=>{this.codebook = data});
  }

}
