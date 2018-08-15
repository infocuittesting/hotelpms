import { TestBed, inject } from '@angular/core/testing';

import { BusinessBlockGridService } from './business-block-grid.service';

describe('BusinessBlockGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessBlockGridService]
    });
  });

  it('should be created', inject([BusinessBlockGridService], (service: BusinessBlockGridService) => {
    expect(service).toBeTruthy();
  }));
});
