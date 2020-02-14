import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from 'store';
import { AuthService } from 'core/services/auth.service';
import { StorageUser } from 'core/shared/interfaces/user.interface';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <core-header></core-header>
    <div class="app__outlet"><router-outlet></router-outlet></div>
    <shop-footer></shop-footer>
  `,
  styles: [
    `
      .app__outlet {
        min-height: 90vh;
      }
    `
  ]
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<fromStore.ShopState>) {}

  public ngOnInit(): void {
    const user: StorageUser = AuthService.fetchStorageUser();

    if (user !== null) {
      this.store.dispatch(new fromStore.FetchUser(user.token));
    }

    this.store.dispatch(new fromStore.FetchApparel());
  }
}
