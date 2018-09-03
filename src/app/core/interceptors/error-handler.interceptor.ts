import {
  ErrorHandler,
  Injectable,
  Injector
} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { ErrorService } from '@core/services/error.service';

@Injectable()
export class ErrorHandlerInterceptor implements ErrorHandler {

  constructor(private injector: Injector) {
  }

  public handleError(error: Error | HttpErrorResponse): void {
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
    console.log('it happens', error);
  }
}