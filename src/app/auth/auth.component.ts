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

import { AuthService } from './auth.service';
import { ApolloService } from '../apollo/services/apollo.service';
import {
  Access,
  StorageUser,
  User
} from './interfaces/user.interface';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  public user: StorageUser;
  public signUpScreen: boolean;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private apolloService: ApolloService,
      private authService: AuthService,
      private cdr: ChangeDetectorRef,
      private dialogRef: MatDialogRef<AuthComponent>
  ) {
  }

  public ngOnInit(): void {
    const user = this.authService.getUser();
    this.signUpScreen = !(user && user.active);

    this.authService.user$
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((user: StorageUser) => {
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
    this.apolloService.signUp(credentials)
        .subscribe((user: User) => {
          const storageUser: StorageUser = { token: user.id };
          this.authService.updateUserStorage(storageUser);
        });
  }

  public setCatchPhrase(catchPhrase: string): void {
    const config = {
      id: this.user.token,
      catchPhrase
    };
    this.apolloService.setCatchPhrase(config)
        .subscribe(() => {
          const storageUser: StorageUser = {
            token: this.user.token,
            active: true
          };

          this.authService.updateUserStorage(storageUser);
        });
    this.dialogRef.close(true);
  }

  public toggleAuthMethod(): void {
    this.signUpScreen = !this.signUpScreen;
    this.authService.clearUser();
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
