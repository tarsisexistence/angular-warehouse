import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from '-home/home.routes';
import { HomeComponent } from '-home/containers/home/home.component';
import { HomeEntranceComponent } from '-home/components/home-entrance/home-entrance.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [
    HomeComponent,
    HomeEntranceComponent
  ],
  exports: [
    HomeComponent,
    HomeEntranceComponent
  ]
})
export class HomeModule {
}
