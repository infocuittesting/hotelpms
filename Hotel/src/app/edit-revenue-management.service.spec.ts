import { TestBed, inject } from '@angular/core/testing';

import { EditRevenueManagementService } from './edit-revenue-management.service';

describe('EditRevenueManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditRevenueManagementService]
    });
  });

  it('should be created', inject([EditRevenueManagementService], (service: EditRevenueManagementService) => {
    expect(service).toBeTruthy();
  }));
});
