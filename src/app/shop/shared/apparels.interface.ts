import { Apparel } from './apparel.interface';

export class Apparels {
  all?: Apparel[];
  accessories: Apparel[];
  sneakers: Apparel[];
  't-shirts': Apparel[];

  constructor() {
    this.accessories = [];
    this.sneakers = [];
    this['t-shirts'] = [];
  }
}
