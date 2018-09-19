import { Apparel } from '-shop/shared/interfaces/apparel.interface';
import { ApparelType } from '-shop/shared/enums/apparel-type.enum';

export class Apparels {
  public all: Apparel[];

  constructor(apparels?: Apparel[]) {
    this.all = apparels || [];
  }

  get accessories(): Apparel[] {
    return this.all.filter((apparel: Apparel) => apparel.type === ApparelType.accessory.toString()) || [];
  }

  get sneakers(): Apparel[] {
    return this.all.filter((apparel: Apparel) => apparel.type === ApparelType.sneaker.toString()) || [];
  }

  get 't-shirts'(): Apparel[] {
    return this.all.filter((apparel: Apparel) => apparel.type === ApparelType.tshirt.toString()) || [];
  }
}
