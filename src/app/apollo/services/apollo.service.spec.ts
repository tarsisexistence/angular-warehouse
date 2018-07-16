import {
  TestBed,
  inject
} from '@angular/core/testing';

import { ApolloService } from './apollo.service';
import { Apollo } from 'apollo-angular';

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
