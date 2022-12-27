import { TestBed } from '@angular/core/testing';

import { Demoservice2Service } from './demoservice2.service';

describe('Demoservice2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Demoservice2Service = TestBed.get(Demoservice2Service);
    expect(service).toBeTruthy();
  });
});
