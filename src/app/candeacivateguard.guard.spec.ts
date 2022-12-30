import { TestBed, async, inject } from '@angular/core/testing';

import { CandeacivateguardGuard } from './candeacivateguard.guard';

describe('CandeacivateguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandeacivateguardGuard]
    });
  });

  it('should ...', inject([CandeacivateguardGuard], (guard: CandeacivateguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
