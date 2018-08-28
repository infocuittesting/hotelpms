import { TestBed, inject } from '@angular/core/testing';

import { FoliohistoryService } from './foliohistory.service';

describe('FoliohistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoliohistoryService]
    });
  });

  it('should be created', inject([FoliohistoryService], (service: FoliohistoryService) => {
    expect(service).toBeTruthy();
  }));
});
