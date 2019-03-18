import { animate, animation, style } from '@angular/animations';

export const slideOutAnimation = animation([
  animate(
    '{{ timings }}',
    style({
      transform: 'translateY({{ to }})',
      opacity: 0
    })
  )
]);
