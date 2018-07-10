import { Injectable } from '@angular/core';

import {
  Effect,
  Actions
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  map,
  catchError
} from 'rxjs/operators';

import { ApolloService } from '../../../apollo/services/apollo.service';
import { Apparel } from '../../../shop/shared/apparel.interface';
import * as ApparelShopActions from '../actions/apparel.shop.actions';

@Injectable()
export class ApparelEffect {
  constructor(
      private actions$: Actions,
      private apolloService: ApolloService
  ) {

  }

  @Effect({ dispatch: true })
  public loadApparels$ = this.actions$
      .ofType(ApparelShopActions.ApparelShopActionTypes.LoadApparel)
      .pipe(
          switchMap(() => {
                return this.apolloService.getAllApparel()
                    .pipe(
                        map((apparel: Apparel[]) => new ApparelShopActions.LoadApparelSuccess(apparel)),
                        catchError(error => of(new ApparelShopActions.LoadApparelFail(error)))
                    );
              }
          )
      );
}