import {
  Injectable,
  Injector
} from '@angular/core';
import {
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { NavigationError } from '@angular/router';


@Injectable()
export class ErrorService {

  constructor(
      private injector: Injector
  ) {

  }

  // public log(error: Error) {
  //   console.error(error);
  //   const errorToSend = this.addContextInfo(error);
  //
  //   return fakeHttpservice.post(errorToSend);
  // }

  // private addContextInfo(error: Error | HttpErrorResponse): ErrorRequest {
  //   const { name, status, message } = error;
  //   const appId = 'concept-store-platform';
  //   const user = 'anonymous';
  //   const time = new Date().getTime();
  //   const id = `${appId}-${user}-${time}`;
  //   const location = this.injector.get(LocationStrategy);
  //   const url = location instanceof PathLocationStrategy ? location.path() : '';
  //   const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);
  //
  //   return {
  //     name,
  //     appId,
  //     user,
  //     time,
  //     id,
  //     url,
  //     status,
  //     message,
  //     stack
  //   };
  // }

  // private listenNavigationErrors(): void {
  //   this.router.events
  //       .subscribe((event: Event) => {
  //         if (event instanceof NavigationError) {
  //           if (!navigator.onLine) {
  //             return;
  //           }
  //
  //           this.log(event.error)
  //               .subscribe((error: ErrorRequest) => {
  //                 this.router.navigate(['/error'], { queryParams: error });
  //               });
  //         }
  //       });
  // }
}