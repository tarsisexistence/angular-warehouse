import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
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
	MatTooltipModule,
	FlexLayoutModule
];

@NgModule({
	exports: modules
})
export class MaterialModule {
}
