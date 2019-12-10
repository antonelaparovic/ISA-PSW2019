import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCCProfileComponent } from './adminCC-profile.component';

describe('AdminCCProfileComponent', () => {
  let component: AdminCCProfileComponent;
  let fixture: ComponentFixture<AdminCCProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCCProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCCProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
