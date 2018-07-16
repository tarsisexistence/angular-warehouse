import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  combineReducers,
  Store,
  StoreModule
} from '@ngrx/store';
import * as fromStore from '@shared/store';
import * as fromAuth from '@shared/store/reducers';

import { CartComponent } from './cart.component';
import { CartService } from '@shared/cart.service';
import { ApolloService } from '@app/apollo';
import { Apollo } from 'apollo-angular';
import { MaterialModule } from '@material/material.module';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: Store<fromStore.CartState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [CartComponent],
          imports: [
            MaterialModule,
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
