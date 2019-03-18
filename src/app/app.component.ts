import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '+store';
import { AuthService } from '$core/services/auth.service';
import { StorageUser } from '$core/shared/interfaces/user.interface';
import { NgPerfume, PerfumeAfterViewInit } from 'perfume.js/angular';

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
@PerfumeAfterViewInit('AppComponent')
export class AppComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly authService: AuthService,
    private readonly store: Store<fromStore.ShopState>,
    private readonly perfume: NgPerfume
  ) {}

  public ngOnInit(): void {
    const user: StorageUser = this.authService.fetchStorageUser();

    if (user !== null) {
      this.store.dispatch(new fromStore.FetchUser(user.token));
    }

    this.store.dispatch(new fromStore.FetchApparel());
  }

  public ngAfterViewInit(): void {}
}
