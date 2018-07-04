import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { shopRouting } from './shop.routes';
import { ShopResolver } from './shop.resolver';
import { MaterialModule } from '../shared/material/material.module';
import { ShopComponent } from './shop.component';
import { BarComponent } from './bar/bar.component';
import { ApparelsComponent } from './apparels/apparels.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		shopRouting,
		MaterialModule
	],
	declarations: [
		ShopComponent,
		BarComponent,
		ApparelsComponent,
		FooterComponent
	],
	providers: [
		ShopResolver
	]
})
export class ShopModule {
}
