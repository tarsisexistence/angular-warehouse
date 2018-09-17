import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { ShopCartBubbleComponent } from './shop-cart-bubble.component';

describe('ShopCartBubbleComponent', () => {
  let component: ShopCartBubbleComponent;
  let fixture: ComponentFixture<ShopCartBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [ShopCartBubbleComponent]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCartBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
