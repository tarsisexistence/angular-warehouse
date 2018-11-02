import { Apparel } from '-shop/shared/interfaces/apparel.interface';

export interface CartApparel extends Apparel {
  quantities: number;
}

export interface CartApparelEntities {
  [id: number]: CartApparel;
}
