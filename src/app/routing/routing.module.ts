import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { CustomSerializer } from '+store';
import { CustomPreloadingStrategy } from './preloading';
import { routes } from './hub/app.routes';

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
  preloadingStrategy: CustomPreloadingStrategy
});

@NgModule({
  imports: [routing],
  exports: [RouterModule, StoreRouterConnectingModule],
  providers: [
    CustomPreloadingStrategy,
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class RoutingModule {}
