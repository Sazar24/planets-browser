import { TestBed, inject } from '@angular/core/testing';

import { PlanetsApiService } from './planets-api.service';

describe('PlanetsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsApiService]
    });
  });

  it('should be created', inject([PlanetsApiService], (service: PlanetsApiService) => {
    expect(service).toBeTruthy();
  }));
});
