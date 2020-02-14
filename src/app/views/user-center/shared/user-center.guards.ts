import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import * as fromStore from 'store';
import { AuthService } from 'core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class UserCenterGuard implements CanActivate {
  constructor(private readonly store: Store<fromStore.ShopState>) {}

  public canActivate(): Observable<boolean> {
    const user = AuthService.fetchStorageUser();
    const isUserExist = Boolean(user);

    return of(isUserExist);
  }

  public checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getShopApparelLoaded).pipe(
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
