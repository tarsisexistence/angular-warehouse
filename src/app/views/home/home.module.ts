import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from './hub/home.routes';
import { HomeComponent } from '-home/containers/home/home.component';
import { HomeWallpaperComponent } from './components/home-wallpaper/home-wallpaper.component';
import { HomeActionComponent } from './components/home-action/home-action.component';
import { SharedModule } from '+shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, homeRouting],
  declarations: [HomeComponent, HomeWallpaperComponent, HomeActionComponent]
})
export class HomeModule {}
