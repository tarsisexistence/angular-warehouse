import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, take } from 'rxjs/operators';

import { ApolloService } from 'apollo/apollo.service';
import {
  ApparelShopActionTypes,
  LoadApparel,
  LoadApparelFailure,
  LoadApparelSuccess
} from 'store/actions/apparel.shop.action';
import { Apparel } from 'shop/shared/interfaces/apparel.interface';

@Injectable({ providedIn: 'root' })
export class ApparelEffects {
  public loadApparels$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadApparel>(ApparelShopActionTypes.LoadApparel),
      exhaustMap(() =>
        this.apolloService.getAllApparel().pipe(
          take(1),
          map((apparel: Apparel[]) => new LoadApparelSuccess(apparel)),
          catchError((error: Error) => of(new LoadApparelFailure(error)))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly apolloService: ApolloService) {}
}
