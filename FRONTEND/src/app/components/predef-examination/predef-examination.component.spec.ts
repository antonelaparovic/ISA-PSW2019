import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefExaminationComponent } from './predef-examination.component';

describe('PredefExaminationComponent', () => {
  let component: PredefExaminationComponent;
  let fixture: ComponentFixture<PredefExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
