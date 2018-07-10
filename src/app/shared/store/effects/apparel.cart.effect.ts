import { Injectable } from '@angular/core';

import {
  Effect,
  Actions
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  tap
} from 'rxjs/operators';

import * as ApparelCartActions from '../actions/apparel.cart.actions';
import { Apparel } from '../../../shop/shared/apparel.interface';
import { CartService } from '../../cart.service';

@Injectable()
export class CartEffect {
  constructor(
      private actions$: Actions,
      private cartService: CartService
  ) {
  }

  @Effect()
  public fetchApparel$ = this.actions$
      .ofType(ApparelCartActions.ApparelCartActionTypes.FetchApparel)
      .pipe(
          switchMap(() => {
                return of(this.cartService.fetchApparelFromLS())
                    .pipe(
                        map((apparel: Apparel[]) => {
                          return new ApparelCartActions.FetchApparelSuccess(apparel);
                        }),
                        catchError(error => of(new ApparelCartActions.FetchApparelFail(error)))
                    );
              }
          )
      );

  @Effect()
  public addApparel$ = this.actions$
      .ofType(ApparelCartActions.ApparelCartActionTypes.AddApparel)
      .pipe(
          switchMap((action: ApparelCartActions.AddApparel) => {
                return of(this.cartService.addApparelToCart(action.payload))
                    .pipe(
                        map((apparel: Apparel) => new ApparelCartActions.AddApparelSuccess(apparel)),
                        catchError(error => of(new ApparelCartActions.AddApparelFail(error)))
                    );
              }
          )
      );

  @Effect()
  public removeApparel$ = this.actions$
      .ofType(ApparelCartActions.ApparelCartActionTypes.RemoveApparel)
      .pipe(
          switchMap((apparel: ApparelCartActions.RemoveApparel) => {
                return of(this.cartService.removeApparelFromCart(apparel.payload))
                    .pipe(
                        map((sequenceNumber: number) => new ApparelCartActions.RemoveApparelSuccess(sequenceNumber)),
                        catchError((error: Error) => of(new ApparelCartActions.RemoveApparelFail(error)))
                    );
              }
          )
      );
}