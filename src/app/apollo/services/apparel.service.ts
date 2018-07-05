import { Injectable } from '@angular/core';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApparelService {
  constructor(private apollo: Apollo) {
  }

  public getAllApparel(searchTerm: string): Observable<any> {
    return this.apollo
    .watchQuery({
      pollInterval: 500,
      query: gql`
          query allApparel($searchTerm: String) {
              allApparel(searchTerm: $searchTerm) {
                  id
                  title
                  attribute
                  color
                  description
                  price
                  image
                  type
              }
          }
      `,
      variables: {
        searchTerm
      }
    })
    .valueChanges
    .pipe(
        map((res: any) => res.data.allApparel)
    );
  }

  public getAllOrders(): Observable<any> {
    return this.apollo
    .watchQuery({
      pollInterval: 500,
      query: gql`
          query allOrders() {
              allOrders() {
                  id
                  name
                  phone
                  address
              }
          }
      `
    })
    .valueChanges
    .pipe(
        map((res: any) => res.data.allOrders)
    );
  }
}
