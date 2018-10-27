import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { VisibilityState } from '$core/shared/enums/visibility-state.enum';

export function getToggleAnimation(type: string): any {
  return (
      trigger(type, [
        state(
            VisibilityState.Hidden.toString(),
            style({
              visibility: 'hidden',
              transform: 'translateY(-100%)'
            })
        ),
        state(
            VisibilityState.Visible.toString(),
            style({
              visibility: 'visible',
              transform: 'translateY(0)'
            })
        ),
        transition(`* => *`, animate('100ms ease-in'))
      ])
  );
};