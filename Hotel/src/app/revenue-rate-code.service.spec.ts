import { TestBed, inject } from '@angular/core/testing';

import { RevenueRateCodeService } from './revenue-rate-code.service';

describe('RevenueRateCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueRateCodeService]
    });
  });

  it('should be created', inject([RevenueRateCodeService], (service: RevenueRateCodeService) => {
    expect(service).toBeTruthy();
  }));
});
