import { TestBed } from '@angular/core/testing';

import { LotsResolveService } from './lots-resolve.service';

describe('LotsResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotsResolveService = TestBed.get(LotsResolveService);
    expect(service).toBeTruthy();
  });
});
