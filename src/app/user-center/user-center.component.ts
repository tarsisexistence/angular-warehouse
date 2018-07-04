import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/interfaces/user.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'user-center-root',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCenterComponent implements OnInit, OnDestroy {
  private user: User;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
      private authService: AuthService,
      private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.authService.user$.subscribe((user: User) => this.user = user);
  }

  public signOut(): void {
    this.authService.signOut();
    this.router.navigate(['']).catch((err: Error) => console.error(err));
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
