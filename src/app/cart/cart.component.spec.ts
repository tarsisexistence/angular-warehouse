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

import { CartComponent } from './cart.component';
import { CartService } from '../shared/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [CartComponent],
          imports: [MatIconModule, MatDialogModule, RouterTestingModule],
          providers: [CartService]
        })
        .compileComponents();
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
