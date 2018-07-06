import { TestBed, inject } from '@angular/core/testing';

import { ApolloService } from './apollo.service';

describe('ApolloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApolloService]
    });
  });

  it('should be created', inject([ApolloService], (service: ApolloService) => {
    expect(service).toBeTruthy();
  }));
});
