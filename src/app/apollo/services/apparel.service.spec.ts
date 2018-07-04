import { TestBed, inject } from '@angular/core/testing';

import { ApparelService } from './apparel.service';

describe('ApparelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApparelService]
    });
  });

  it('should be created', inject([ApparelService], (service: ApparelService) => {
    expect(service).toBeTruthy();
  }));
});
