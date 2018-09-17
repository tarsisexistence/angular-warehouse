import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { ShopCartButtonComponent } from './shop-cart-button.component';

describe('ShopCartButtonComponent', () => {
  let component: ShopCartButtonComponent;
  let fixture: ComponentFixture<ShopCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [ShopCartButtonComponent]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
