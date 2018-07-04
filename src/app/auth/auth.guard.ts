import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
      private authService: AuthService,
      private router: Router
  ) {

  }

  public canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.user$
        .take(1)
        .map((user: any) => Boolean(user && user.catchPhrase))
        .do((loggedIn: any) => {
          if (loggedIn) {
            return;
          }

          alert('You must be logged in and have a catch phrase');
          // this.router.navigate(['']);
        });
  }
}
