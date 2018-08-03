import { TestBed, inject } from '@angular/core/testing';

import { BusinessCreateBlockService } from './business-create-block.service';

describe('BusinessCreateBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessCreateBlockService]
    });
  });

  it('should be created', inject([BusinessCreateBlockService], (service: BusinessCreateBlockService) => {
    expect(service).toBeTruthy();
  }));
});
