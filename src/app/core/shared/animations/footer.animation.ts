import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { VisibilityState } from '@core/shared/enums/visibility-state.enum';

export const footerAnimation =
    trigger('toggleFooter', [
      state(
          VisibilityState.Hidden,
          style({
            opacity: 0,
            transform: 'translateY(100%)'
          })
      ),
      state(
          VisibilityState.Visible,
          style({
            opacity: 1,
            transform: 'translateY(0)'
          })
      ),
      transition(`* => *`, animate('100ms ease-in'))
    ]);