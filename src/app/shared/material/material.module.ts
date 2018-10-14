import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
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
export class MaterialModule {
}
