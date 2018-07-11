import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '../../shared/store';

import { AuthComponent } from '../../auth/auth.component';
import { AuthService } from '../../auth/auth.service';
import {
  StorageUser,
  User
} from '../../auth/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  private user: User;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      public router: Router,
      private authService: AuthService,
      private dialog: MatDialog,
      private store: Store<fromStore.AuthState>
  ) {
  }

  public ngOnInit(): void {
    const user: StorageUser = this.authService.getUserFromLS();

    if (user !== null) {
      this.store.dispatch(new fromStore.GetUser(user.token));
    }

    this.store.select(fromStore.getUserAuth)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((user: User) => this.user = user);
  }

  public auth(): void {
    if (this.user) {
      this.router.navigate(['user-center', this.user.id]).catch((err: Error) => console.error(err));
      return;
    }

    this.authPopUp();
  }

  private authPopUp(): void {
    this.dialog.open(AuthComponent, { width: '30%' });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
