import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Secluded, Unit } from 'routeshub';
import { SHOP_UNIT_KEY, ShopNotes } from '-shop/hub/shop.notes';

@Component({
  selector: 'shop-bar',
  templateUrl: './shop-bar.component.html',
  styleUrls: ['./shop-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopBarComponent {
  @Input() public categories: string[];

  @Secluded(SHOP_UNIT_KEY)
  public shopUnit: Unit<ShopNotes>;

  public identify(index: number): number {
    return index;
  }
}
