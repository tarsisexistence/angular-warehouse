import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import {
  Observable,
  of
} from 'rxjs';
import {
  tap,
  filter,
  take,
  switchMap,
  catchError
} from 'rxjs/operators';
import * as fromStore from '@core/store';

import { AuthService } from '@auth/shared/services/auth.service';

@Injectable({ providedIn: 'root' })
export class UserCenterGuard implements CanActivate {

  constructor(
      private authService: AuthService,
      private store: Store<fromStore.ShopState>
  ) {
  }

  public canActivate(): Observable<boolean> {
    // const checkStore = this.checkStore().pipe(
    //     switchMap(() => of(true)),
    //     catchError(() => of(false))
    // );

    return of(Boolean(this.authService.fetchStorageUser()));
  }

  public checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getShopApparelsLoaded).pipe(
        tap((loaded: boolean) => {
          if (loaded) {
            return;
          }

          this.store.dispatch(new fromStore.LoadApparel());
        }),
        filter((loaded: boolean) => loaded),
        take(1)
    );
  }
}
