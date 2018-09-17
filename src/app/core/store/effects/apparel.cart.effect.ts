import { Injectable } from '@angular/core';

import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError,
  finalize
} from 'rxjs/operators';

import { Apparel } from '@shop/shared/interfaces/apparel.interface';
import { CartService } from '@core/services/cart.service';
import {
  AddApparel,
  AddApparelFail,
  AddApparelSuccess,
  ApparelCartActionTypes,
  FetchApparel,
  FetchApparelFail,
  FetchApparelSuccess,
  RemoveApparel,
  RemoveApparelFail,
  RemoveApparelSuccess
} from '@store/actions/apparel.cart.action';

@Injectable({ providedIn: 'root' })
export class CartEffect {

  @Effect()
  public fetchApparel$ = this.actions$.pipe(
      ofType<FetchApparel>(ApparelCartActionTypes.FetchApparel),
      switchMap(() => of(this.cartService.fetchStorageApparel()).pipe(
          map((apparel: Apparel[]) => new FetchApparelSuccess(apparel)),
          catchError((error: Error) => of(new FetchApparelFail(error))),
          finalize(() => console.log('finalize fetchApparel$'))
          )
      )
  );

  @Effect()
  public addApparel$ = this.actions$.pipe(
      ofType<AddApparel>(ApparelCartActionTypes.AddApparel),
      map((action: AddApparel) => action.payload),
      switchMap((apparel: Apparel) => of(this.cartService.addApparelToCart(apparel)).pipe(
          map((apparel: Apparel) => new AddApparelSuccess(apparel)),
          catchError((error: Error) => of(new AddApparelFail(error))),
          finalize(() => console.log('finalize addApparel$'))
          )
      )
  );

  @Effect()
  public removeApparel$ = this.actions$.pipe(
      ofType<RemoveApparel>(ApparelCartActionTypes.RemoveApparel),
      map((action: RemoveApparel) => action.payload),
      switchMap((id: string) => of(this.cartService.removeApparelFromCart(id)).pipe(
          map((sequenceNumber: number) => new RemoveApparelSuccess(sequenceNumber)),
          catchError((error: Error) => of(new RemoveApparelFail(error))),
          finalize(() => console.log('finalize removeApparel$'))
          )
      )
  );

  constructor(
      private actions$: Actions,
      private cartService: CartService
  ) {
  }
}