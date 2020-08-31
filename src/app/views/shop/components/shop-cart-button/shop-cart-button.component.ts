import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shop-cart-button',
  template: ` <mat-icon class="icon">add_shopping_cart</mat-icon> `,
  styles: [
    `
      .icon {
        position: relative;
        top: 3px;
        left: 10px;
        font-size: 20px;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartButtonComponent {}
