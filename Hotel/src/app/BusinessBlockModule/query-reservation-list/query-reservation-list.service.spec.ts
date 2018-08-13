import { TestBed, inject } from '@angular/core/testing';

import { QueryReservationListService } from './query-reservation-list.service';

describe('QueryReservationListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryReservationListService]
    });
  });

  it('should be created', inject([QueryReservationListService], (service: QueryReservationListService) => {
    expect(service).toBeTruthy();
  }));
});
