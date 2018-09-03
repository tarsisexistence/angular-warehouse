import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core/core.module';
import { SharedModule } from '@app/shared';
import { appRouting } from '@app/app.routes';
import { AppComponent } from '@app/app.component';

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

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    NoopAnimationsModule,
    BrowserTransferStateModule,
    appRouting,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(routerEffects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      name: 'concept store platform',
      logOnly: !environment.production
    })

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ]
})
export class AppModule {
}
