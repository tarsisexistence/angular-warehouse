import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { OrdersComponent } from '@shared/dialogs/orders/orders.component';
import {
  returnPolicy,
  shippingHandling
} from '@shared/constants/shop-rules.constants';

@Component({
  selector: 'shop-footer',
  templateUrl: './shop-footer.component.html',
  styleUrls: ['./shop-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopFooterComponent {

  constructor(private dialog: MatDialog) {
  }

  public openShippingHandling(): void {
    this.dialog.open(OrdersComponent, {
      height: '500px',
      width: '600px',
      data: shippingHandling
    });
  }

  public openReturnPolicy(): void {
    this.dialog.open(OrdersComponent, {
      height: '500px',
      width: '600px',
      data: returnPolicy
    });
  }
}
