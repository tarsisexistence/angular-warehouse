import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import * as routerActions from '../actions/router.action';

@Injectable({ providedIn: 'root' })
export class RouterEffect {
  @Effect({ dispatch: false })
  public navigate$ = this.actions$.pipe(
    ofType(routerActions.RouterActionsTypes.Go),
    map((action: routerActions.Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras }).catch();
    })
  );

  @Effect({ dispatch: false })
  public navigateForward$ = this.actions$.pipe(
    ofType(routerActions.RouterActionsTypes.Forward),
    tap(() => this.location.forward())
  );

  @Effect({ dispatch: false })
  public navigateBack$ = this.actions$.pipe(
    ofType(routerActions.RouterActionsTypes.Back),
    tap(() => this.location.back())
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
