import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from '@home/home.routes';
import { HomeComponent } from '@home/home.component';
import { EntranceComponent } from '@home/entrance/entrance.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [
    HomeComponent,
    EntranceComponent
  ],
  exports: [
    HomeComponent,
    EntranceComponent
  ]
})
export class HomeModule {
}
