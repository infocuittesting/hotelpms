import { TestBed, inject } from '@angular/core/testing';

import { BusinessserviceService } from './businessservice.service';

describe('BusinessserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessserviceService]
    });
  });

  it('should be created', inject([BusinessserviceService], (service: BusinessserviceService) => {
    expect(service).toBeTruthy();
  }));
});
