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

import * as ApparelActions from '../actions/apparel.action';
import { ApolloService } from '../../../apollo/services/apollo.service';
import { Apparel } from '../../shared/apparel.interface';

@Injectable()
export class ApparelEffect {
  constructor(
      private actions$: Actions,
      private apolloService: ApolloService
  ) {

  }

  @Effect({ dispatch: true })
  public loadApparels$ = this.actions$
      .ofType(ApparelActions.LOAD_APPAREL)
      .pipe(
          switchMap(() => this.apolloService.getAllApparel()
              .pipe(
                  map((apparel: Apparel[]) => new ApparelActions.LoadApparelSuccess(apparel)),
                  catchError(error => of(new ApparelActions.LoadApparelFail(error)))
              )
          )
      );
}