import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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

import { SharedModule } from './shared';
import { ApolloModule } from './apollo';
import { appRouting } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';
import { CartModule } from './cart/cart.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    BrowserTransferStateModule,
    HttpClientModule,
    RouterModule,
    appRouting,
    SharedModule,
    ApolloModule,
    AuthModule,
    CartModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'concept store platform',
      logOnly: !environment.production
    })

  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {

}
