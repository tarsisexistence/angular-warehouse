import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { OrdersComponent } from './dialogs/orders/orders.component';
import { CartService } from './cart.service';
import { PaymentComponent } from './dialogs/payment/payment.component';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { OnlyStringsDirective } from './directives/only-strings.directive';

const sharedModules = [
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NoopAnimationsModule
];

@NgModule({
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: [
    sharedModules
  ],
  declarations: [
    OrdersComponent,
    PaymentComponent,
    OnlyNumbersDirective,
    OnlyStringsDirective
  ],
  entryComponents: [
    OrdersComponent,
    PaymentComponent
  ],
  providers: [
    CartService
  ]
})
export class SharedModule {
}
