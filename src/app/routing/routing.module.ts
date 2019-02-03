import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';

import { routes } from './hub/app.routes';
import { CustomSerializer } from '+store';
import {
  ErrorHandlerInterceptor,
  ServerErrorInterceptor
} from '$routing/interceptors';

/**
 * Routing configuration
 * Nothing special
 */
export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes as Routes,
  {
    enableTracing: false,
    initialNavigation: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top'
  }
);

/**
 * Routing module contains its configuration
 * and providers (resolvers, guard, interceptors etc)
 * and also exports RouterModule
 */
@NgModule({
  imports: [routing],
  exports: [RouterModule, StoreRouterConnectingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerInterceptor
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class RoutingModule {}
