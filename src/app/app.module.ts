import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';

import { CoreModule } from '@app/core/core.module';
import { environment } from '@env/environment';
import { appRouting } from './app.routes';
import { AppComponent } from './app.component';

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
    BrowserTransferStateModule,
    appRouting,
    CoreModule,
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
