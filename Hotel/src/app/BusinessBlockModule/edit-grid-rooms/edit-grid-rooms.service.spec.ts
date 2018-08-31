import { TestBed, inject } from '@angular/core/testing';

import { EditGridRoomsService } from './edit-grid-rooms.service';

describe('EditGridRoomsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditGridRoomsService]
    });
  });

  it('should be created', inject([EditGridRoomsService], (service: EditGridRoomsService) => {
    expect(service).toBeTruthy();
  }));
});
