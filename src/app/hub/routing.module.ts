import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { CustomSerializer } from 'store';
import { CustomPreloadingStrategy } from './preloading';
import { AppHub } from 'hub/app.hub';

@NgModule({
  imports: [AppHub, StoreRouterConnectingModule.forRoot()],
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
