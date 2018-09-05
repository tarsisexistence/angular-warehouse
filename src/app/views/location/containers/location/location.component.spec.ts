import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

import { LocationComponent } from '@location/containers/location/location.component';
import { LocationMapComponent } from '@location/components/location-map/location-map.component';
import { MapService } from '@location/shared/map.service';
import { GeolocationService } from '@location/shared/geolocation.service';
import { GeocodingService } from '@location/shared/geocoding.service';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports: [
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule
          ],
          declarations: [
            LocationComponent,
            LocationMapComponent
          ],
          providers: [
            MapService,
            GeolocationService,
            GeocodingService
          ]
        })
        .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LocationComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should init location component', () => {
  //   expect(component).toBeTruthy();
  // });
});
