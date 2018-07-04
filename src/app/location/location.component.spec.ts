import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

import { LocationComponent } from './location.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MapService } from './shared/map.service';
import { GeolocationService } from './shared/geolocation.service';
import { GeocodingService } from './shared/geocoding.service';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [
            LocationComponent,
            GoogleMapComponent
          ],
          imports: [
            FormsModule,
            MatFormFieldModule
          ],
          providers: [
              MapService,
              GeolocationService,
              GeocodingService
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should init location component', () => {
    expect(component).toBeTruthy();
  });
});
