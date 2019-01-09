import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, take } from 'rxjs/operators';

import { ApolloService } from '+apollo/services/apollo.service';
import {
  ApparelShopActionTypes,
  LoadApparel,
  LoadApparelFailure,
  LoadApparelSuccess
} from '+store/actions/apparel.shop.action';
import { Apparel } from '-shop/shared/interfaces/apparel.interface';

@Injectable({ providedIn: 'root' })
export class ApparelEffect {
  @Effect()
  public loadApparels$ = this.actions$.pipe(
    ofType<LoadApparel>(ApparelShopActionTypes.LoadApparel),
    exhaustMap(() =>
      this.apolloService.getAllApparel().pipe(
        take(1),
        map((apparel: Apparel[]) => new LoadApparelSuccess(apparel)),
        catchError((error: Error) => of(new LoadApparelFailure(error)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private apolloService: ApolloService
  ) {}
}
