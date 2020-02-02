import { TestBed } from '@angular/core/testing';

import { ClinicalCenterAdministratorService } from './clinicalCenterAdministrator.service';

describe('ClinicalCenterAdministratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicalCenterAdministratorService = TestBed.get(ClinicalCenterAdministratorService);
    expect(service).toBeTruthy();
  });
});