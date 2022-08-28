import { TestBed } from '@angular/core/testing';

import { EquationApiService } from './equation-api.service';

describe('EquationApiService', () => {
  let service: EquationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
