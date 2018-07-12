import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '@shared/store';

import {
  Access,
  CatchPhraseConfig,
  User
} from './interfaces/user.interface';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  public user: User;
  public signUpScreen: boolean;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private cdr: ChangeDetectorRef,
      private dialogRef: MatDialogRef<AuthComponent>,
      private store: Store<fromStore.AuthState>
  ) {
  }

  public ngOnInit(): void {
    this.store.select(fromStore.getUser)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((user: User) => {
          this.user = user;

          if (user === null) {
            return;
          }

          this.cdr.detectChanges();
        });

    this.signUpScreen = !(this.user && this.user.catchPhrase);
  }

  public signIn(credentials: Access): void {
    this.store.dispatch(new fromStore.SignIn(credentials));
    this.dialogRef.close();
  }

  public signUp(credentials: Access): void {
    this.store.dispatch(new fromStore.SignUp(credentials));
  }

  public setCatchPhrase(catchPhrase: string): void {
    const config: CatchPhraseConfig = {
      id: this.user.id,
      catchPhrase
    };
    this.store.dispatch(new fromStore.SignUpCatchPhrase(config));
    this.dialogRef.close();
  }

  public toggleAuthMethod(): void {
    this.signUpScreen = !this.signUpScreen;
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
