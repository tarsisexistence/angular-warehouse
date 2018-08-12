import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '@shared/store';

import { StorageUser } from '@auth/interfaces/user.interface';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <core-header></core-header>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private store: Store<fromStore.ShopState>
  ) {
  }

  public ngOnInit(): void {
    const user: StorageUser = this.authService.fetchUserFromLS();

    if (user !== null) {
      this.store.dispatch(new fromStore.FetchUser(user.token));
    }

    this.store.dispatch(new fromStore.FetchApparel());
  }
}
