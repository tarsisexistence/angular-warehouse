import { TestBed } from '@angular/core/testing';

import {
  ApolloTestingController,
  ApolloTestingModule
} from 'apollo-angular/testing';

import { ApolloService } from '@apollo/services/apollo.service';
import { Order } from '@shared/interfaces/order.interface';
import { allOrders } from '@apollo/queries';

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

    it('should test getting all orders', (done) => {
      const data = {
        'data': {
          'allOrders': [
            {
              'id': '197dab70-b062-11e8-8240-bfefe9f77f98',
              'name': 'Tak Marsis',
              'phone': '3809342112319'
            }
          ]
        }
      };
      service.getAllOrders().subscribe((result: Order[]) => {
        expect(result).toEqual(data);
        done();
      });

      backend.expectOne(allOrders).flush(data);
    });
  });
});
