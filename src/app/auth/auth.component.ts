import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { AuthService } from './auth.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApolloService } from '../apollo/services/apollo.service';
import {
  Access,
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
  public isNewUser: boolean;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private apolloService: ApolloService,
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
    this.apolloService.signUp(credentials)
        .subscribe((user: User) => this.authService.getUser(user));
  }

  public setCatchPhrase(catchPhrase: string): void {
    const config = {
      id: this.user.id,
      catchPhrase
    };
    this.apolloService.setCatchPhrase(config).subscribe(data => console.log(data));
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
