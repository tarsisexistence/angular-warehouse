import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InfoComponent } from '#shared/dialogs/info/info.component';
import { PaymentComponent } from '#shared/dialogs/payment/payment.component';
import { OnlyNumbersDirective } from '#shared/directives/only-numbers.directive';
import { OnlyStringsDirective } from '#shared/directives/only-strings.directive';
import { MaterialModule } from '+material/material.module';

const sharedModules = [
  ReactiveFormsModule,
  MaterialModule
];

@NgModule({
  imports: [
    CommonModule,
    ...sharedModules
  ],
  exports: sharedModules,
  declarations: [
    InfoComponent,
    PaymentComponent,
    OnlyNumbersDirective,
    OnlyStringsDirective
  ],
  entryComponents: [
    InfoComponent,
    PaymentComponent
  ]
})
export class SharedModule {
}
