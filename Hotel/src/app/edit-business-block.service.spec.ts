import { TestBed, inject } from '@angular/core/testing';

import { EditBusinessBlockService } from './edit-business-block.service';

describe('EditBusinessBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditBusinessBlockService]
    });
  });

  it('should be created', inject([EditBusinessBlockService], (service: EditBusinessBlockService) => {
    expect(service).toBeTruthy();
  }));
});
