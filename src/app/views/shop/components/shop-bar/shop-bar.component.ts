import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Slice, Sliced } from 'routeshub';
import { SHOP_HUB_KEY, ShopNotes } from '-shop/hub/shop.notes';

@Component({
  selector: 'shop-bar',
  templateUrl: './shop-bar.component.html',
  styleUrls: ['./shop-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopBarComponent {
  @Input() public categories: string[];

  @Sliced(SHOP_HUB_KEY)
  public slice: Slice<ShopNotes>;

  public identify(index: number): number {
    return index;
  }
}
