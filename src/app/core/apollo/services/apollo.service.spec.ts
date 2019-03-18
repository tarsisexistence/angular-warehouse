import { TestBed } from '@angular/core/testing';

import {
  ApolloTestingController,
  ApolloTestingModule
} from 'apollo-angular/testing';

import { allOrders } from '+apollo/queries';
import { ApolloService } from '+apollo/services/apollo.service';

describe('ApolloService', () => {
  let backend: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule]
    });

    backend = TestBed.get(ApolloTestingController);
  });

  it('should be created', () => {
    const service: ApolloService = TestBed.get(ApolloService);
    expect(service).toBeTruthy();

    it('should test getting all data', (done) => {
      const data = {
        data: {
          allOrders: [
            {
              id: '197dab70-b062-11e8-8240-bfefe9f77f98',
              name: 'Tak Marsis',
              phone: '3809342112319'
            }
          ]
        }
      };
      service.getAllOrders().subscribe((result: any) => {
        expect(result)
          .toEqual(data)
          .catch(console.error);
        done();
      });

      backend.expectOne(allOrders).flush(data);
    });
  });
});
