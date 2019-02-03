import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import {
  concatAll,
  concatMap,
  delay,
  mergeMap,
  take,
  retry,
  retryWhen
} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ServerErrorInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request);
    // .pipe(
    //     retry(2),
    //     retryWhen((error) => error
    //         .pipe(
    //             mergeMap((error: any) => {
    //               if (error.status === 503) {
    //                 return of(error.status).pipe(delay(1000));
    //               }
    //
    //               return throwError({ error: 'No retry' });
    //             }),
    //             take(5),
    //             concatMap(() => throwError({ error: 'Sorry, there was an error (after 5 retries)' }))
    //         ))
    // );
  }
}
