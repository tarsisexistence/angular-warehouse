import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AuthComponent } from '../../auth/auth.component';
import { AuthService } from '../../auth/auth.service';
import { StorageUser } from '../../auth/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private user: StorageUser;

  constructor(
      public router: Router,
      private authService: AuthService,
      private dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.authService.user$.subscribe((user: StorageUser) => this.user = user);
  }

  public auth(): void {
    if (this.user && this.user.active) {
      this.router.navigate(['user-center', this.user.token]).catch((err: Error) => console.error(err));
      return;
    }

    this.authPopUp();
  }

  private authPopUp(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (!res) {
        return;
      }

      this.router.navigate(['user-center', this.user.token]).catch((err: Error) => console.error(err));
    });
  }
}
