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
import * as fromStore from '@shared/store';

import { AuthComponent } from '@auth/auth.component';
import { User } from '@auth/interfaces/user.interface';

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
      private dialog: MatDialog,
      private store: Store<fromStore.AuthState>
  ) {
  }

  public ngOnInit(): void {
    this.store.select(fromStore.getUser)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((user: User) => this.user = user);
  }

  public auth(): void {
    if (this.user && this.user.catchPhrase) {
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
