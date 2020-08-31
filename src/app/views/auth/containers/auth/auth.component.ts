import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from 'store';
import { Access, CatchPhraseConfig, User } from 'core/shared/interfaces/user.interface';

@Component({
  selector: 'auth-feat',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  public user: BehaviorSubject<User>;
  public signUpScreen: boolean;
  private unsubscribe$: Subject<void>;

  constructor(
    private readonly dialogRef: MatDialogRef<AuthComponent>,
    private readonly store: Store<fromStore.AuthState>
  ) {}

  public ngOnInit(): void {
    this.user = new BehaviorSubject<User>(null);
    this.unsubscribe$ = new Subject<void>();

    this.store
      .select(fromStore.getUser)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: User) => this.user.next(user));

    this.signUpScreen = !(this.user.value && this.user.value.catchPhrase);
  }

  public signIn(credentials: Access): void {
    this.store.dispatch(new fromStore.SignIn(credentials));
    this.dialogRef.close();
  }

  public signUp(credentials: Access): void {
    this.store.dispatch(new fromStore.SignUp(credentials));
  }

  public setCatchPhrase(catchPhrase: string): void {
    const { id } = this.user.getValue();
    const config: CatchPhraseConfig = {
      id,
      catchPhrase
    };

    const catchPhraseAction = new fromStore.SignUpCatchPhrase(config);
    this.store.dispatch(catchPhraseAction);

    this.dialogRef.close();
  }

  public toggleAuthMethod(): void {
    this.signUpScreen = !this.signUpScreen;
  }

  public ngOnDestroy(): void {
    this.user.complete();

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
