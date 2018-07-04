import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  MatDialogModule,
  MatIconModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { ShoppingCartComponent } from './shopping-cart.component';
import { CartService } from '../../shared/cart.service';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [ShoppingCartComponent],
          imports: [MatIconModule, MatDialogModule, RouterTestingModule],
          providers: [CartService]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init shopping cart component', () => {
    expect(component).toBeTruthy();
  });
});
