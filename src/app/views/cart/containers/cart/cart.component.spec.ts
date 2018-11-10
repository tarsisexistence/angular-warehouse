import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromStore from '+store';
import * as fromAuth from '+store/reducers';
import { SharedTestingModule } from '#shared/shared.testing.module';
import { CartComponent } from '=cart/containers/cart/cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store<fromStore.CartState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [
        SharedTestingModule,
        StoreModule.forRoot({
          shop: combineReducers(fromAuth.cartReducers)
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init cart component', () => {
    expect(component).toBeTruthy();
  });
});
