import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MetaReducer, StoreModule } from '@ngrx/store';
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { PerfumeModule } from 'perfume.js/angular';

import { AuthModule } from '=auth/auth.module';
import { environment } from '~env/environment';
import { MyApolloModule } from '+apollo/apollo.module';
import { routerEffects } from '+store';
import { CustomSerializer, reducers } from '+store/selectors/router.selectors';
import { SharedModule } from '#shared/shared.module';
import { CartModule } from '=cart/cart.module';
import { HeaderComponent } from '$core/components/header/header.component';
import { ServerErrorInterceptor } from '$core/interceptors/server-error.interceptor';
import { ErrorHandlerInterceptor } from '$core/interceptors/error-handler.interceptor';
import { FooterComponent } from '$core/components/footer/footer.component';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

export const perfumeConfig = {
  firstContentfulPaint: true,
  firstInputDelay: true
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    EffectsModule.forRoot(routerEffects),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      name: 'Concept Store Platform',
      logOnly: !environment.production
    }),
    PerfumeModule.forRoot(perfumeConfig),
    MyApolloModule,
    SharedModule,
    AuthModule,
    CartModule
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
  constructor(
    @Optional()
    @SkipSelf()
    core: CoreModule
  ) {
    if (core) {
      throw new Error(`Core module must not be imported twice!`);
    }
  }
}
