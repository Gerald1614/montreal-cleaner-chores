import { TestBed, inject } from '@angular/core/testing';

import { ChoreService } from './chore.service';

describe('ChoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoreService]
    });
  });

  it('should be created', inject([ChoreService], (service: ChoreService) => {
    expect(service).toBeTruthy();
  }));
});
