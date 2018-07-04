import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApparelService {
  constructor(private apollo: Apollo) {
  }

  getAllApparel(searchTerm: string) {
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
    .valueChanges.pipe(map((res: any) => res.data.allApparel));
  }
}
