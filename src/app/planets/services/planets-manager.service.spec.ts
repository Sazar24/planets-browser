import { TestBed, inject } from '@angular/core/testing';

import { PlanetsManagerService } from './planets-manager.service';

describe('PlanetsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsManagerService]
    });
  });

  it('should be created', inject([PlanetsManagerService], (service: PlanetsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
