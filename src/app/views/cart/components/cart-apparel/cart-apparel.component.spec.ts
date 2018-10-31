import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartApparelComponent } from './cart-apparel.component';

describe('CartApparelComponent', () => {
  let component: CartApparelComponent;
  let fixture: ComponentFixture<CartApparelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartApparelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
