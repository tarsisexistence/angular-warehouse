import { Apparel } from '-shop/shared/interfaces/apparel.interface';
import { ApparelType } from '-shop/shared/enums/apparel-type.enum';
import { filterApparelType } from '-shop/shared/functions/filter-apparel-type.function';

export class Apparels {
  public all: Apparel[];
  public accessories: Apparel[];
  public sneakers: Apparel[];
  public ['t-shirts']: Apparel[];

  constructor(apparels?: Apparel[]) {
    this.all = apparels || [];
    this.accessories = filterApparelType(this.all, ApparelType.accessory);
    this.sneakers = filterApparelType(this.all, ApparelType.sneaker);
    this['t-shirts'] = filterApparelType(this.all, ApparelType.tshirt);
  }
}
