import { animate, animation, style } from '@angular/animations';

export const slideInAnimation = animation([
  style({
    transform: 'translateY({{ from }})',
    opacity: 0
  }),
  animate('{{ timings }}', style('*'))
]);
