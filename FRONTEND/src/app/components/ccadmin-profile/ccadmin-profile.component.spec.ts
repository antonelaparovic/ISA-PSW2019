import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCAdminProfileComponent } from './ccadmin-profile.component';

describe('CCAdminProfileComponent', () => {
  let component: CCAdminProfileComponent;
  let fixture: ComponentFixture<CCAdminProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCAdminProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
