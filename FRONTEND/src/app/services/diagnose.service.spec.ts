import { TestBed } from '@angular/core/testing';

import { DiagnoseService } from './diagonse.service';

describe('DiagnoseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiagnoseService = TestBed.get(DiagnoseService);
    expect(service).toBeTruthy();
  });
});
