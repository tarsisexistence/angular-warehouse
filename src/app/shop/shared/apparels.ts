import { Apparel } from './apparel.interface';
import { ApparelType } from '@shop/shared/apparel-type.enum';

export class Apparels {
  public all: Apparel[];

  constructor(apparels?: Apparel[]) {
    this.all = apparels || [];
  }

  get accessories(): Apparel[] {
    return this.all.filter((apparel: Apparel) => apparel.type === ApparelType.accessory) || [];
  }

  get sneakers(): Apparel[] {
    return this.all.filter((apparel: Apparel) => apparel.type === ApparelType.sneaker) || [];
  }

  get 't-shirts'(): Apparel[] {
    return this.all.filter((apparel: Apparel) => apparel.type === ApparelType.tshirt) || [];
  }
}
