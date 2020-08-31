import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Apparel } from 'shop/shared/interfaces/apparel.interface';

@Component({
  selector: 'cart-apparel',
  templateUrl: './cart-apparel.component.html',
  styleUrls: ['./cart-apparel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartApparelComponent {
  @Input()
  public apparel: Apparel;
  @Output()
  private readonly removeCartApparelEmitter: EventEmitter<string>;

  constructor() {
    this.removeCartApparelEmitter = new EventEmitter<string>();
  }

  public removeCartApparel(id: string): void {
    this.removeCartApparelEmitter.emit(id);
  }
}
