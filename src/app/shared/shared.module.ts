import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NavigationModule } from 'routeshub';

import { InfoComponent } from './dialogs/info/info.component';
import { PaymentComponent } from './dialogs/payment/payment.component';
import { NumericOnlyDirective } from './directives/numeric-only.directive';
import { StringOnlyDirective } from './directives/string-only.directive';
import { MaterialModule } from './modules/material.module';

const sharedModules = [ReactiveFormsModule, MaterialModule, NavigationModule];

@NgModule({
  imports: [CommonModule, ...sharedModules],
  exports: sharedModules,
  declarations: [InfoComponent, PaymentComponent, NumericOnlyDirective, StringOnlyDirective]
})
export class SharedModule {}
