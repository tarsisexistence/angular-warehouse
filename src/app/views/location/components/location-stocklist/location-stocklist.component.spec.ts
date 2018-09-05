import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { LocationStocklistComponent } from './location-stocklist.component';

describe('LocationStocklistComponent', () => {
  let component: LocationStocklistComponent;
  let fixture: ComponentFixture<LocationStocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [LocationStocklistComponent]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationStocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
