import { transition, trigger, useAnimation } from '@angular/animations';

import { slideInAnimation } from 'shop/shared/animations/slide-in.animation';
import { slideOutAnimation } from 'shop/shared/animations/slide-out.animation';

export const visibilityChange = trigger('visibilityChange', [
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
]);
