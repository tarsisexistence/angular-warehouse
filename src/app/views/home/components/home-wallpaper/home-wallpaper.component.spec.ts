import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWallpaperComponent } from './home-wallpaper.component';

describe('HomeWallpaperComponent', () => {
  let component: HomeWallpaperComponent;
  let fixture: ComponentFixture<HomeWallpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWallpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWallpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
