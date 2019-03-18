import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home-wallpaper',
  templateUrl: './home-wallpaper.component.html',
  styleUrls: ['./home-wallpaper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeWallpaperComponent {}
