import { TestBed } from '@angular/core/testing';

import { SingleLotResolveService } from './single-lot-resolve.service';

describe('SingleLotResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleLotResolveService = TestBed.get(SingleLotResolveService);
    expect(service).toBeTruthy();
  });
});
