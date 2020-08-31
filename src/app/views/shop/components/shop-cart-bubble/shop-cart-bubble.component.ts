import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { visibilityChange } from 'shop/shared/animations/visibility-change.animation';
import { counterChange } from 'shop/shared/animations/counter-change.animation';

@Component({
  selector: 'shop-cart-bubble',
  template: ` <span>{{ message }}</span> `,
  styleUrls: ['./shop-cart-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [visibilityChange, counterChange]
})
export class ShopCartBubbleComponent {
  @HostBinding('@counterChange')
  @Input()
  public message: string;

  @HostBinding('@visibilityChange')
  public animation = true;
}
