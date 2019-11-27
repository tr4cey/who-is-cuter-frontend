import { TestBed } from '@angular/core/testing';

import { PairService } from './pair.service';

describe('PairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PairService = TestBed.get(PairService);
    expect(service).toBeTruthy();
  });
});
