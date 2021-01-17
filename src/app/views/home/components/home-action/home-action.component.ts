import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Secluded, Unit } from 'routeshub';
import { ShopNotes, SHOP_UNIT_KEY } from 'shop/hub/shop.notes';

@Component({
  selector: 'home-action',
  templateUrl: './home-action.component.html',
  styleUrls: ['./home-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeActionComponent implements OnInit {
  @Secluded(SHOP_UNIT_KEY)
  public shopUnit: Unit<ShopNotes>;

  public ngOnInit(): void {}
}
