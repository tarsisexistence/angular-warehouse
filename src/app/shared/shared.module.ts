import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@material/material.module';
import { OrdersComponent } from '@shared/dialogs/orders/orders.component';
import { PaymentComponent } from '@shared/dialogs/payment/payment.component';
import { OnlyNumbersDirective } from '@shared/directives/only-numbers.directive';
import { OnlyStringsDirective } from '@shared/directives/only-strings.directive';

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
  ]
})
export class SharedModule {
}
