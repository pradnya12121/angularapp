import { TestBed, async, inject } from '@angular/core/testing';

import { UnSaveGuard } from './un-save.guard';

describe('UnSaveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnSaveGuard]
    });
  });

  it('should ...', inject([UnSaveGuard], (guard: UnSaveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
