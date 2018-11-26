import { TestBed } from '@angular/core/testing';

import { LotResolverService } from './lot-resolver.service';

describe('LotResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LotResolverService = TestBed.get(LotResolverService);
    expect(service).toBeTruthy();
  });
});
