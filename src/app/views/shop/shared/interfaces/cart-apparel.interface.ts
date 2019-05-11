import { Apparel } from './apparel.interface';

export interface CartApparel extends Apparel {
  quantities: number;
}

export interface CartApparelEntities {
  [id: number]: CartApparel;
}
