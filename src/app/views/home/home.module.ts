import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouting } from '-home/hub';
import { HomeComponent } from '-home/containers/home/home.component';
import { HomeWallpaperComponent } from '-home/components/home-wallpaper/home-wallpaper.component';
import { HomeActionComponent } from '-home/components/home-action/home-action.component';

@NgModule({
  imports: [CommonModule, homeRouting],
  declarations: [HomeComponent, HomeWallpaperComponent, HomeActionComponent]
})
export class HomeModule {}
