import { transition, trigger, useAnimation } from '@angular/animations';

import { pulseAnimation } from 'shop/shared/animations/pulse.animation';

export const counterChange = trigger('counterChange', [
  transition(
    ':increment',
    useAnimation(pulseAnimation, {
      params: {
        timings: '200ms',
        scale: 1.2
      }
    })
  )
]);
