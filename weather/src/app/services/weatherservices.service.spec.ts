import { TestBed } from '@angular/core/testing';

import { WeatherServicesService } from './weatherservices.service';

describe('WeatherServicesService', () => {
  let service: WeatherServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
