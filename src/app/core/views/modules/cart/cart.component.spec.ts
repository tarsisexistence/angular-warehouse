import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Apollo } from 'apollo-angular';
import {
  combineReducers,
  Store,
  StoreModule
} from '@ngrx/store';
import * as fromStore from '@core/store';
import * as fromAuth from '@store/reducers';

import { ApolloService } from '@apollo/services/apollo.service';
import { CartComponent } from '@cart/cart.component';
import { CartService } from '@core/services/cart.service';
import { SharedModule } from '@shared/shared.module';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store<fromStore.CartState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [CartComponent],
          imports: [
            SharedModule,
            RouterTestingModule,
            StoreModule.forRoot({
              shop: combineReducers(fromAuth.reducers)
            })
          ],
          providers: [Apollo, ApolloService, CartService]
        })
        .compileComponents();

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
