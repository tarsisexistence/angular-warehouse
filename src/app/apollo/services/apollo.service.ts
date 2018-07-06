import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Order } from '../../shared/interfaces/order.interface';
import { allApparel } from '../queries/apparel.query';
import { Apparel } from '../../shop/shared/apparel.interface';
import {
  addOrder,
  allOrders
} from '../queries/order.query';
import { MyApolloModule } from '../apollo.module';

@Injectable({ providedIn: MyApolloModule })
export class ApolloService {
  constructor(private apollo: Apollo) {
  }

  public getAllApparel(searchTerm: string): Observable<Apparel[]> {
    return this.apollo
        .watchQuery({
          pollInterval: 500,
          query: allApparel,
          variables: {
            searchTerm
          }
        })
        .valueChanges
        .pipe(map((res: any) => res.data.allApparel));
  }

  public getAllOrders(searchTerm: string = ''): Observable<Order[]> {
    return this.apollo
        .watchQuery({
          pollInterval: 500,
          query: allOrders,
          variables: {
            searchTerm
          }
        })
        .valueChanges
        .pipe(map((res: any) => res.data.allOrders));
  }

  public addOrder({ name, phone, address }: Order): Observable<Order> {
    return this.apollo
        .mutate({
          mutation: addOrder,
          variables: {
            name,
            phone,
            address
          }
        })
        .pipe(map((res: any) => res.data.addOrder));
  }
}
