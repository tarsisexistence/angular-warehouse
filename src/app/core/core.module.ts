import {
  ErrorHandler,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';

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
} from '@store/reducers/states/router.reducers';
import { routerEffects } from '@core/store';

import { environment } from '@env/environment';
import { MyApolloModule } from '@apollo/apollo.module';
import { SharedModule } from '@shared/shared.module';
import { AuthModule } from '@auth/auth.module';
import { CartModule } from '@cart/cart.module';
import { HeaderComponent } from '@core/views/components/header/header.component';
import { ServerErrorInterceptor } from '@core/interceptors/server-error.interceptor';
import { ErrorHandlerInterceptor } from '@core/interceptors/error-handler.interceptor';
import { FooterComponent } from '@core/views/components/footer/footer.component';

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
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
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
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
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(`Core module must not be imported twice!`);
    }
  }
}
