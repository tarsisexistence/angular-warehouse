import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'shared/shared.module';
import { HomeComponent } from 'home/containers/home/home.component';
import { HomeHub } from './hub/home.hub';
import { HomeWallpaperComponent } from './components/home-wallpaper/home-wallpaper.component';
import { HomeActionComponent } from './components/home-action/home-action.component';

@NgModule({
  imports: [CommonModule, SharedModule, HomeHub],
  declarations: [HomeComponent, HomeWallpaperComponent, HomeActionComponent]
})
export class HomeModule {}
