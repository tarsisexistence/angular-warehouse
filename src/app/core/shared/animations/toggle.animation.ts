import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { VisibilityState } from '@core/shared/enums/visibility-state.enum';

export const getToggleAnimation = (type: string) => {
  return (
      trigger(type, [
        state(
            VisibilityState.Hidden.toString(),
            style({
              opacity: 0,
              transform: 'translateY(-100%)'
            })
        ),
        state(
            VisibilityState.Visible.toString(),
            style({
              opacity: 1,
              transform: 'translateY(0)'
            })
        ),
        transition(`* => *`, animate('100ms ease-in'))
      ])
  );
};