import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '@shared/store';

import { ApolloService } from '@apollo/services/apollo.service';
import { CartService } from '@shared/cart.service';
import { Apparel } from '@shop/shared/apparel.interface';
import { PaymentComponent } from '@shared/dialogs/payment/payment.component';
import { Order } from '@shared/interfaces/order.interface';

@Component({
  selector: 'cart-feat',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {
  public cartApparels: Apparel[];
  public subtotal: number;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  private static calcSubtotal(apparels: Apparel[]): number {
    return apparels.reduce((result: number, apparel: Apparel) => result + apparel.price, 0);
  }

  constructor(
      private apolloService: ApolloService,
      private cartService: CartService,
      private dialog: MatDialog,
      private router: Router,
      private store: Store<fromStore.CartState>
  ) {
  }

  public ngOnInit(): void {
    this.store.select(fromStore.getAllCartApparels)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((apparels: Apparel[]) => {
          this.cartApparels = apparels ? apparels : [];
          this.subtotal = CartComponent.calcSubtotal(apparels);
        });
  }

  public removeCartApparel(sequenceNumber: number): void {
    this.store.dispatch(new fromStore.RemoveApparel(sequenceNumber));
  }

  public checkout(subtotal: number): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      height: '500px',
      width: '600px',
      data: subtotal
    });

    dialogRef.afterClosed().subscribe((order: Order) => {
      if (!order) {
        return;
      }

      this.apolloService.addOrder(order).subscribe(() => {
        alert('Your order is confirmed. We will contact you soon');
        this.cartService.clearCart();
      });
      this.router.navigate(['']);
    });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
