import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Secluded, Unit } from 'routeshub';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ApolloService } from 'apollo/apollo.service';
import { CartState, getCartApparel } from 'store/selectors/cart.selectors';
import { ClearApparel, RemoveApparel } from 'store/actions';
import { PaymentComponent } from 'shared/dialogs/payment/payment.component';
import { Order } from 'core/shared/interfaces/order.interface';
import { Apparel } from 'shop/shared/interfaces/apparel.interface';
import { AppNotes, APP_UNIT_KEY } from 'hub/app.notes';

@Component({
  selector: 'cart-feat',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {
  public cartApparels: Apparel[];
  public subtotal: number;

  @Secluded(APP_UNIT_KEY)
  private app: Unit<AppNotes>;
  private unsubscribe$: Subject<boolean>;

  private static calcSubtotal(apparels: Apparel[]): number {
    return apparels.reduce((result: number, apparel: Apparel) => result + apparel.price, 0);
  }

  constructor(
    private readonly apolloService: ApolloService,
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly store: Store<CartState>
  ) {}

  public ngOnInit(): void {
    this.unsubscribe$ = new Subject<boolean>();

    this.store
      .select(getCartApparel)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((apparels: Apparel[]) => {
        this.cartApparels = apparels ? apparels : [];
        this.subtotal = CartComponent.calcSubtotal(apparels);
      });
  }

  public removeCartApparel(id: string): void {
    this.store.dispatch(new RemoveApparel(id));
  }

  public checkout(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      height: '500px',
      width: '600px',
      data: this.subtotal
    });

    dialogRef.afterClosed().subscribe((order: Order) => {
      if (!order) {
        return;
      }

      this.apolloService.addOrder(order).subscribe(() => {
        alert('Your order is confirmed. We will contact you soon');

        this.store.dispatch(new ClearApparel());
        this.router.navigate(this.app.home.state).catch(console.error);
      });
    });
  }

  public identify(index: number, apparel: Apparel): string {
    return apparel.id;
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
