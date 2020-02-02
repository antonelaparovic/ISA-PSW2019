import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPatientsPageComponent } from './allpatients-page.component';

describe('AllPatientsPageComponent', () => {
  let component: AllPatientsPageComponent;
  let fixture: ComponentFixture<AllPatientsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPatientsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPatientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
