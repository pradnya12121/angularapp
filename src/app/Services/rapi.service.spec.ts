import { TestBed } from '@angular/core/testing';

import { RapiService } from './rapi.service';

describe('RapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RapiService = TestBed.get(RapiService);
    expect(service).toBeTruthy();
  });
});
