import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {
  NgZorroAntdModule,
  NZ_I18N,
  en_US
} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { AuthModule } from '@auth/auth.module';
import { CartModule } from '@cart/cart.module';
import { MyApolloModule } from '@apollo/apollo.module';
import { MaterialModule } from '@material/material.module';
import { HeaderComponent } from '@core/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    NgZorroAntdModule,
    AuthModule,
    CartModule,
    MyApolloModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [
    {
      provide: NZ_I18N,
      useValue: en_US
    }
  ]
})
export class CoreModule {
}
