import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { PerfumeModule } from 'perfume.js/angular';

import { environment } from 'env/environment';
import { RoutingModule } from 'hub/routing.module';
import { routerEffects } from 'store';
import { reducers } from 'store/selectors/router.selectors';
import { MyApolloModule } from 'apollo/apollo.module';
import { SharedModule } from 'shared/shared.module';
import { AuthModule } from 'auth/auth.module';
import { CartModule } from 'cart/cart.module';
import { HeaderComponent } from 'core/components/header/header.component';
import { FooterComponent } from 'core/components/footer/footer.component';

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
    HttpClientModule,
    EffectsModule.forRoot(routerEffects),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'Concept Store Platform',
      logOnly: !environment.production
    }),
    PerfumeModule.forRoot(perfumeConfig),
    RoutingModule,
    MyApolloModule,
    SharedModule,
    AuthModule,
    CartModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [RoutingModule, HeaderComponent, FooterComponent],
  providers: []
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
