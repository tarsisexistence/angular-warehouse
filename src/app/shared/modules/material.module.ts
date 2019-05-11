import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';

const modules = [
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  exports: modules
})
export class MaterialModule {}
