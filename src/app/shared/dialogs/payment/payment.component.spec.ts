import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { PaymentComponent } from './payment.component';
import { CartService } from '@shared/cart.service';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [PaymentComponent],
          imports: [
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            NoopAnimationsModule
          ],
          providers: [
            CartService,
            {
              provide: MatDialogRef,
              useValue: {}
            }
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should init dialog payment component', () => {
  //   expect(component).toBeTruthy();
  // });
});
