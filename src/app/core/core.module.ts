import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  MetaReducer,
  StoreModule
} from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import {
  reducers,
  CustomSerializer
} from '@shared/store/reducers/states/router.reducers';
import { routerEffects } from '@shared/store';

import { environment } from '@env/environment';
import { MaterialModule } from '@material/material.module';
import { MyApolloModule } from '@apollo/apollo.module';
import { AuthModule } from '@auth/auth.module';
import { CartModule } from '@cart/cart.module';
import { HeaderComponent } from '@core/components/header/header.component';

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    MyApolloModule,
    AuthModule,
    CartModule,
    EffectsModule.forRoot(routerEffects),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      name: 'concept store platform',
      logOnly: !environment.production
    })
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(`Core module must not be imported twice!`);
    }
  }
}
