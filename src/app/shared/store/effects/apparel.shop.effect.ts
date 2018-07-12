import { Injectable } from '@angular/core';

import {
  Actions,
  Effect,
  ofType
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  exhaustMap,
  map,
  catchError,
  take
} from 'rxjs/operators';

import { ApolloService } from '@apollo/services/apollo.service';
import { Apparel } from '@shop/shared/apparel.interface';
import {
  ApparelShopActionTypes,
  LoadApparel,
  LoadApparelFail,
  LoadApparelSuccess
} from '@shared/store/actions/apparel.shop.actions';

@Injectable()
export class ApparelEffect {
  @Effect()
  public loadApparels$ = this.actions$.pipe(
      ofType<LoadApparel>(ApparelShopActionTypes.LoadApparel),
      exhaustMap(() => this.apolloService.getAllApparel()
          .pipe(
              take(1),
              map((apparel: Apparel[]) => new LoadApparelSuccess(apparel)),
              catchError((error: Error) => of(new LoadApparelFail(error)))
          ))
  );

  constructor(
      private actions$: Actions,
      private apolloService: ApolloService
  ) {
  }
}