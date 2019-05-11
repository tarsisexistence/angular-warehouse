import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { routes } from './hub/app.routes';
import { CustomSerializer } from '+store';
import { Preloading } from '-routing/preloading';

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top'
});

@NgModule({
  imports: [routing],
  exports: [RouterModule, StoreRouterConnectingModule],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
    Preloading
  ]
})
export class RoutingModule {}
