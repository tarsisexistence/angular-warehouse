import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';

import { CartService } from 'core/services/cart.service';
import {
  AddApparel,
  AddApparelFailure,
  AddApparelSuccess,
  ApparelCartActionTypes,
  ClearApparel,
  ClearApparelFailure,
  ClearApparelSuccess,
  FetchApparel,
  FetchApparelFailure,
  FetchApparelSuccess,
  RemoveApparel,
  RemoveApparelFailure,
  RemoveApparelSuccess
} from 'store/actions/apparel.cart.action';
import { CartApparel } from 'shop/shared/interfaces/cart-apparel.interface';
import { Apparel } from 'shop/shared/interfaces/apparel.interface';

@Injectable({ providedIn: 'root' })
export class CartEffects {
  public addApparel$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddApparel>(ApparelCartActionTypes.AddApparel),
      map((action: AddApparel) => action.payload),
      switchMap((apparel: Apparel) =>
        of(CartService.addApparelToCart(apparel)).pipe(
          map((apparel: CartApparel) => new AddApparelSuccess(apparel)),
          catchError((error: Error) => of(new AddApparelFailure(error))),
          finalize(() => console.log('finalize addApparel$'))
        )
      )
    )
  );

  public clearApparel$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ClearApparel>(ApparelCartActionTypes.ClearApparel),
      switchMap(() =>
        of(CartService.emptyCart()).pipe(
          map(() => new ClearApparelSuccess()),
          catchError((error: Error) => of(new ClearApparelFailure(error))),
          finalize(() => console.log('finalize clearApparel$'))
        )
      )
    )
  );

  public fetchApparel$ = createEffect(() =>
    this.actions$.pipe(
      ofType<FetchApparel>(ApparelCartActionTypes.FetchApparel),
      switchMap(() =>
        of(CartService.fetchStorageApparel()).pipe(
          map((apparel: CartApparel[]) => new FetchApparelSuccess(apparel)),
          catchError((error: Error) => of(new FetchApparelFailure(error))),
          finalize(() => console.log('finalize fetchApparel$'))
        )
      )
    )
  );

  public removeApparel$ = createEffect(() =>
    this.actions$.pipe(
      ofType<RemoveApparel>(ApparelCartActionTypes.RemoveApparel),
      map((action: RemoveApparel) => action.payload),
      switchMap((id: string) =>
        of(CartService.removeApparelFromCart(id)).pipe(
          map((sequenceNumber: string) => new RemoveApparelSuccess(sequenceNumber)),
          catchError((error: Error) => of(new RemoveApparelFailure(error))),
          finalize(() => console.log('finalize removeApparel$'))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions) {}
}
