import { TestBed } from '@angular/core/testing';

import { AdminJwtServiceService } from './admin-jwt-service.service';

describe('AdminJwtServiceService', () => {
  let service: AdminJwtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminJwtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
