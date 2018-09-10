import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatIconModule } from '@angular/material';

import { ShopApparelsComponent } from './shop-apparels.component';

describe('ShopApparelsComponent', () => {
  let component: ShopApparelsComponent;
  let fixture: ComponentFixture<ShopApparelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [ShopApparelsComponent],
          imports: [MatIconModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopApparelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init shop-apparels component', () => {
    expect(component).toBeTruthy();
  });
});
