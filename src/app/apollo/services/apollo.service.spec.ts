import {
  TestBed,
  inject
} from '@angular/core/testing';

import { Apollo } from 'apollo-angular';

import { ApolloService } from '@apollo/services/apollo.service';

describe('ApolloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Apollo, ApolloService]
    });
  });

  it('should be created', inject([ApolloService], (service: ApolloService) => {
    expect(service).toBeTruthy();
  }));
});
