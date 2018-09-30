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

import * as fromStore from '+store/index';
import { ApolloService } from '+apollo/services/apollo.service';
import { PaymentComponent } from '#shared/dialogs/payment/payment.component';
import { routesEntity } from '$routes-entity/entity';
import { CartService } from '$core/services/cart.service';
import { Order } from '$core/shared/interfaces/order.interface';
import { Apparel } from '-shop/shared/interfaces/apparel.interface';

@Component({
  selector: 'cart-feat',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {
  public cartApparels: Apparel[];
  public subtotal: number;
  private ngUnsubscribe: Subject<boolean>;

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
    this.ngUnsubscribe = new Subject<boolean>();

    this.store.select(fromStore.getCartApparel)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((apparels: Apparel[]) => {
          this.cartApparels = apparels ? apparels : [];
          this.subtotal = CartComponent.calcSubtotal(apparels);
        });
  }

  public removeCartApparel(id: string): void {
    this.store.dispatch(new fromStore.RemoveApparel(id));
  }

  public checkout(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      height: '500px',
      width: '600px',
      data: this.subtotal
    });

    dialogRef.afterClosed()
        .subscribe((order: Order) => {
          if (!order) {
            return;
          }

          this.apolloService.addOrder(order)
              .subscribe(() => {
                alert('Your order is confirmed. We will contact you soon');
                this.cartService.emptyCart();
                this.router.navigate(routesEntity.app.home.state);
              });
        });
  }

  public identify(index: number, apparel: Apparel): string {
    return apparel.id;
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
