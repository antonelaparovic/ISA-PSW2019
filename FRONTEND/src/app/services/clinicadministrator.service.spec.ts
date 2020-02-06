import { TestBed } from '@angular/core/testing';

import { ClinicadministratorService } from './clinicadministrator.service';

describe('ClinicadministratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClinicadministratorService = TestBed.get(ClinicadministratorService);
    expect(service).toBeTruthy();
  });
});
