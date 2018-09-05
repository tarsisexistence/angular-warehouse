import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { LocationMapComponent } from './location-map.component';
import { MapService } from '@location/shared/map.service';

describe('LocationMapComponent', () => {
  let component: LocationMapComponent;
  let fixture: ComponentFixture<LocationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [LocationMapComponent],
          providers: [MapService]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationMapComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
