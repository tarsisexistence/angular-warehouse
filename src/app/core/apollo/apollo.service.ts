import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MyApolloModule } from 'apollo/apollo.module';
import { addOrder, allApparel, allOrders, setCatchPhrase, signIn, signUp, user } from 'apollo/queries';
import { Order } from 'core/shared/interfaces/order.interface';
import { Access, CatchPhraseConfig, User } from 'core/shared/interfaces/user.interface';
import { Apparel } from 'shop/shared/interfaces/apparel.interface';

@Injectable({ providedIn: MyApolloModule })
export class ApolloService {
  constructor(private readonly apollo: Apollo) {}

  public getAllApparel(): Observable<Apparel[]> {
    return this.apollo
      .watchQuery({
        pollInterval: 500,
        query: allApparel
      })
      .valueChanges.pipe(map((res: any) => res.data.allApparel));
  }

  public getAllOrders(): Observable<Order[]> {
    return this.apollo
      .watchQuery({
        pollInterval: 500,
        query: allOrders
      })
      .valueChanges.pipe(map((res: any) => res.data.allOrders));
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

  public signUp({ email, password }: Access): Observable<User> {
    return this.apollo
      .mutate({
        mutation: signUp,
        variables: {
          email,
          password
        }
      })
      .pipe(map((res: any) => res.data.signUp));
  }

  public setCatchPhrase({ id, catchPhrase }: CatchPhraseConfig): Observable<User> {
    return this.apollo
      .mutate({
        mutation: setCatchPhrase,
        variables: {
          id,
          catchPhrase
        }
      })
      .pipe(map((res: any) => res.data.setCatchPhrase));
  }

  public signIn({ email, password }: Access): Observable<User> {
    return this.apollo
      .query({
        query: signIn,
        variables: {
          email,
          password
        }
      })
      .pipe(map((res: any) => res.data.signIn));
  }

  public fetchUser(id: string): Observable<User> {
    return this.apollo
      .query({
        query: user,
        variables: {
          id
        }
      })
      .pipe(map((res: any) => res.data.user));
  }
}
