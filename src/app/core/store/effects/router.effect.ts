import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { Go, RouterActionsTypes } from '../actions/router.action';

@Injectable({ providedIn: 'root' })
export class RouterEffects {
  public navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActionsTypes.Go),
        map((action: Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras }).catch();
        })
      ),
    { dispatch: false }
  );

  public navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActionsTypes.Forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  public navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActionsTypes.Back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly location: Location
  ) {}
}
