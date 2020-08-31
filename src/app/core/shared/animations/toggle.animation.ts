import { animate, state, style, transition, trigger } from '@angular/animations';

import { visibility } from 'core/shared/constants/visibility';

export function getToggleAnimation(type: string): any {
  return trigger(type, [
    state(
      visibility.hidden,
      style({
        visibility: visibility.hidden,
        transform: 'translateY(-100%)'
      })
    ),
    state(
      visibility.visible,
      style({
        visibility: visibility.visible,
        transform: 'translateY(0)'
      })
    ),
    transition(`* => *`, animate('100ms ease-in'))
  ]);
}
