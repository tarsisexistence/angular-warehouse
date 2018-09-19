import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';

import { Apparel } from '-shop/shared/interfaces/apparel.interface';

@Component({
  selector: 'shop-apparels',
  templateUrl: './shop-apparels.component.html',
  styleUrls: ['./shop-apparels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopApparelsComponent {
  @Input() public apparels: Apparel[];
  @Output() public addToCartEmitter: EventEmitter<Apparel> = new EventEmitter<Apparel>();

  public addToCart(apparel: Apparel): void {
    this.addToCartEmitter.emit(apparel);
  }

  public identify(index: number, apparel: Apparel): string {
    return apparel.id;
  }
}
