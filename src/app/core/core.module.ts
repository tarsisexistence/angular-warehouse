import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    AuthModule,
    CartModule,
    MyApolloModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(`Core module must not be imported twice!`);
    }
  }
}
