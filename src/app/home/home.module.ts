import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { EntranceComponent } from './entrance/entrance.component';
import { homeRouting } from './home.routes';

@NgModule({
	imports: [CommonModule, homeRouting],
	declarations: [HomeComponent, EntranceComponent],
	exports: [HomeComponent, EntranceComponent]
})
export class HomeModule {
}
