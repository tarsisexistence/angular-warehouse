import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared';
import { appRouting } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-root' }),
    BrowserTransferStateModule,
    HttpClientModule,
    RouterModule,
    appRouting,
    SharedModule,
    AuthModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}
