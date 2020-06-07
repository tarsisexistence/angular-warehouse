import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { RouterActionsTypes, Go } from '../actions/router.action';

@Injectable({ providedIn: 'root' })
export class RouterEffect {
  @Effect({ dispatch: false })
  public navigate$ = this.actions$.pipe(
    ofType(RouterActionsTypes.Go),
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras }).catch();
    })
  );

  @Effect({ dispatch: false })
  public navigateForward$ = this.actions$.pipe(
    ofType(RouterActionsTypes.Forward),
    tap(() => this.location.forward())
  );

  @Effect({ dispatch: false })
  public navigateBack$ = this.actions$.pipe(
    ofType(RouterActionsTypes.Back),
    tap(() => this.location.back())
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly location: Location
  ) {}
}
