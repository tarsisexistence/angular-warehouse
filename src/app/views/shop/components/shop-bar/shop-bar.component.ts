import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { ShopRoutes } from '$routes-entity/routes';
import { RSEntity } from '$routes-entity/interfaces';

@Component({
  selector: 'shop-bar',
  templateUrl: './shop-bar.component.html',
  styleUrls: ['./shop-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopBarComponent {
  @Input() public categories: string[];
  @Input() public routesEntity: RSEntity<ShopRoutes>;

  public identify(index: number): number {
    return index;
  }
}
