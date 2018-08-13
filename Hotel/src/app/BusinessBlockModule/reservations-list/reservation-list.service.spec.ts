import { TestBed, inject } from '@angular/core/testing';

import { ReservationListService } from './reservation-list.service';

describe('ReservationListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationListService]
    });
  });

  it('should be created', inject([ReservationListService], (service: ReservationListService) => {
    expect(service).toBeTruthy();
  }));
});
