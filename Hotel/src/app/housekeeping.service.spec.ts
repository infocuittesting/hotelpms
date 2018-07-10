import { TestBed, inject } from '@angular/core/testing';

import { HousekeepingService } from './housekeeping.service';

describe('HousekeepingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousekeepingService]
    });
  });

  it('should be created', inject([HousekeepingService], (service: HousekeepingService) => {
    expect(service).toBeTruthy();
  }));
});
