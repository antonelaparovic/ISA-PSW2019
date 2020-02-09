import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Nurse} from '../../models/nurse';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {NurseService} from '../../services/nurse.service';
import {UserService} from '../../services/user.service';
import {Role} from '../../models/role';
import {Medicine} from '../../models/medicine';
import {MedicineService} from '../../services/medicine.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Clinic} from '../../models/clinic';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  addMedicineForm: FormGroup;
  submitted = false;
  medicines: Array<Medicine> = new Array<Medicine>();
  medicine: Medicine;
  dataSource = new MatTableDataSource<Medicine>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns = ['id', 'title', 'description', 'strenght'];

  constructor(private formBuilder: FormBuilder, private router: Router, private medicineService: MedicineService,
              private  userService: UserService) {

    this.medicines = this.medicineService.getAllMedicines();
    this.all();
  }

  ngOnInit() {
    this.addMedicineForm = this.formBuilder.group({

      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      strenght: new FormControl('', [Validators.required]),
    });

    this.all();
    this.dataSource.paginator = this.paginator;
  }

  get f() {
    return this.addMedicineForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.addMedicineForm.invalid) {
      return;
    }

    this.medicine = new Medicine(
      this.f.id.value,
      this.f.title.value,
      this.f.description.value,
      this.f.strenght.value,
    );

    this.medicine = new Medicine(this.f.id.value,
      this.f.title.value,
      this.f.description.value,
      this.f.strenght.value);
    this.createMedicine();
  }

  private createMedicine() {
    this.medicineService.newMedicine(this.medicine).subscribe(
      data => {
        this.medicineService.addMedicine(this.medicine);
        this.router.navigate(['/clinicalCenterAdministrator/profile']);
      },
      error => {
        alert('Error adding medicament');
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
    this.dataSource = new MatTableDataSource<Medicine>(this.medicineService.getAllMedicines());
  }
}
