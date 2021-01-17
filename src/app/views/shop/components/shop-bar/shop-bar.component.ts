import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Secluded, Unit } from 'routeshub';

import { ShopNotes, SHOP_UNIT_KEY } from 'shop/hub/shop.notes';
import { Category } from 'shop/shared/interfaces/category.interface';

@Component({
  selector: 'shop-bar',
  templateUrl: './shop-bar.component.html',
  styleUrls: ['./shop-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopBarComponent {
  @Input() public categories: Category[];

  @Secluded(SHOP_UNIT_KEY)
  public shopUnit: Unit<ShopNotes>;

  public identify(index: number): number {
    return index;
  }
}
