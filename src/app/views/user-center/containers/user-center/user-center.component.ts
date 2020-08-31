import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from 'store';
import { User } from 'core/shared/interfaces/user.interface';

@Component({
  selector: 'user-center-feat',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCenterComponent implements OnInit, OnDestroy {
  private user: User;
  private unsubscribe$: Subject<void>;

  constructor(private readonly store: Store<fromStore.AuthState>) {}

  public ngOnInit(): void {
    this.unsubscribe$ = new Subject<void>();

    this.store
      .select(fromStore.getUser)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: User) => (this.user = user));
  }

  public signOut(): void {
    this.store.dispatch(new fromStore.SignOut());
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
