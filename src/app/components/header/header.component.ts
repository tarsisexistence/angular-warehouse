import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthComponent } from '../../auth/auth.component';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private user: User;

  constructor(
      public router: Router,
      private authService: AuthService,
      private dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    // this.authService.user$.subscribe((user: User) => this.user = user);
  }

  public auth(): void {
    if (!this.user || this.user.catchPhrase === undefined) {
      this.authPopUp();
      return;
    }

    this.router.navigate(['user-center', this.user.uid]).catch((err: Error) => console.error(err));
  }

  private authPopUp(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res === undefined) {
        return;
      }

      if (res.signedUp) {
        this.router.navigate(['user-center', this.user.uid]).catch((err: Error) => console.error(err));
      }
    });
  }
}
