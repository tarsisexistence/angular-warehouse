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

import { CartService } from '../../shared/cart.service';
import { Apparel } from '../../shop/shared/apparel.interface';
import { PaymentComponent } from '../../shared/dialogs/payment/payment.component';
import { Order } from '../../shared/interfaces/order.interface';
import { ApolloService } from '../../apollo';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public cartApparels: Apparel[];
  public subtotal: number;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  private static calcSubtotal(apparels: Apparel[]): number {
    return apparels.reduce((result: number, apparel: Apparel) => result + apparel.price, 0);
  }

  constructor(
      private cartService: CartService,
      private dialog: MatDialog,
      private router: Router,
      private apolloService: ApolloService
  ) {
  }

  public ngOnInit(): void {
    this.cartService.cartApparels$
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((apparels: Apparel[]) => {
          this.cartApparels = apparels;
          this.subtotal = ShoppingCartComponent.calcSubtotal(apparels);
        });
  }

  public deleteCartApparel(apparel: Apparel): void {
    this.cartService.deleteCartApparel(apparel);
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

      this.apolloService.addOrder(order).subscribe();
      alert('Your order is confirmed. We will contact you soon');
      this.router.navigate(['']);
    });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
