import { TestBed } from '@angular/core/testing';

import { MassOfDataService } from './mass-of-data.service';

describe('MassOfDataService', () => {
  let service: MassOfDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassOfDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
