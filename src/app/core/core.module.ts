import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '@auth/auth.module';
import { CartModule } from '@cart/cart.module';
import { SharedModule } from '@shared/shared.module';
import { MyApolloModule } from '@apollo/apollo.module';
import { MaterialModule } from '@material/material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    AuthModule,
    CartModule,
    SharedModule,
    MyApolloModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
}
