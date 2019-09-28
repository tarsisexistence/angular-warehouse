import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeHub } from './hub/home.hub';
import { HomeComponent } from '-home/containers/home/home.component';
import { HomeWallpaperComponent } from './components/home-wallpaper/home-wallpaper.component';
import { HomeActionComponent } from './components/home-action/home-action.component';
import { SharedModule } from '+shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, HomeHub],
  declarations: [HomeComponent, HomeWallpaperComponent, HomeActionComponent]
})
export class HomeModule {}
