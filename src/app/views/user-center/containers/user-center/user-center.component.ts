import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '@core/store';

import { User } from '@auth/shared/interfaces/user.interface';

@Component({
  selector: 'user-center-feat',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCenterComponent implements OnInit, OnDestroy {
  private user: User;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<fromStore.AuthState>) {}

  public ngOnInit(): void {
    this.store
      .select(fromStore.getUser)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((user: User) => (this.user = user));
  }

  public signOut(): void {
    this.store.dispatch(new fromStore.SignOut());
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
