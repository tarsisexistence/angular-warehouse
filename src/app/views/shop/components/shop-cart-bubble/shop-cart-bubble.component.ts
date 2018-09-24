import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';
import {
  transition,
  trigger,
  useAnimation
} from '@angular/animations';

import {
  pulseAnimation,
  slideInAnimation,
  slideOutAnimation
} from '-shop/shared/animations/bubble.animation';

@Component({
  selector: 'shop-cart-bubble',
  template: `{{ message }}`,
  styleUrls: ['./shop-cart-bubble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
      // TODO: refactor this
    trigger('visibilityChange', [
      transition(':enter', [
        useAnimation(slideInAnimation, {
          params: {
            from: '20%',
            timings: '200ms ease-in'
          }
        })
      ]),
      transition(':leave', [
        useAnimation(slideOutAnimation, {
          params: {
            to: '-200%',
            timings: '200ms ease-in'
          }
        })
      ])
    ]),
    trigger('counterChange', [
      transition(
          ':increment',
          useAnimation(pulseAnimation, {
            params: {
              timings: '200ms',
              scale: 1.2
            }
          })
      )
    ])
  ]
})
export class ShopCartBubbleComponent {
  @HostBinding('@counterChange')
  @Input()
  public message: string;

  @HostBinding('@visibilityChange')
  public animation = true;
}
