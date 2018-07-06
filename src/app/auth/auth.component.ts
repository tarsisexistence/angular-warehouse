import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { AuthService } from './auth.service';
import {
  Access,
  User
} from './interfaces/user.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  public user: User;
  public isNewUser: boolean;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private authService: AuthService,
      private cdr: ChangeDetectorRef,
      private dialogRef: MatDialogRef<AuthComponent>
  ) {
  }

  public ngOnInit(): void {
    this.isNewUser = true;

    this.authService.user$
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((user: User) => {
          this.user = user;

          if (user === null) {
            return;
          }

          this.cdr.detectChanges();
        });
  }

  public signIn(credentials: Access): void {
    this.authService.signIn(credentials);
  }

  public signUp(credentials: Access): void {
    this.authService.emailSignUp(credentials);
  }

  public setCatchPhrase(catchPhrase: string): void {
    this.authService.updateUser(this.user, { catchPhrase })
        .then((res) => {
          // TODO: succ notification about successful set catchPhrase
        })
        .catch((err: Error) => {
          console.error(err);
          // TODO: err notification about unsuccessful set catchPhrase
        });

    this.dialogRef.close({ signedUp: true });
  }

  public toggleAuthMethod(): void {
    this.isNewUser = !this.isNewUser;
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
