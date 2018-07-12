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
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    BrowserTransferStateModule,
    appRouting,
    CoreModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'concept store platform',
      logOnly: !environment.production
    })

  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
