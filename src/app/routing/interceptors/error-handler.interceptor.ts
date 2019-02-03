import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import * as Raven from 'raven-js';

Raven.config(
  'https://a4c420f5930a4e87927ea6baaf4e2afd@sentry.io/1273569'
).install();

@Injectable({ providedIn: 'root' })
export class ErrorHandlerInterceptor implements ErrorHandler {
  constructor(private injector: Injector) {}

  public handleError(error: Error | HttpErrorResponse): void {
    Raven.captureException(error);
    // const router = this.injector.get(Router);
    // const notificationService: NotificationService = this.injector.get(NotificationService);
    // const errorService = this.injector.get(ErrorService);
    if (error instanceof HttpErrorResponse) {
      // TODO: notification; a clear message explaining to the user what is happening and how proceed
      if (navigator.onLine) {
        // errorService.log(error).subscribe();
        // return notificationService.notify(`${error.status} - ${error.message}`);
        return;
      }

      // return notificationService.notify('No Internet Connection!');
      return;
    }

    // client error (angular / reference)
    // errorService.log(error)
    //     .subscribe((error: ErrorRequest) => {
    //       router.navigate(['/error'], { queryParams: { error } });
    //     });
  }

  // private log(error: HttpErrorResponse, fingerprint: string): Observable<HttpErrorResponse> {
  //   Raven.captureException(error.message, {
  //     fingerprint: [fingerprint],
  //     extra: error
  //   });
  //
  //   return throwError(error);
  // }
}
