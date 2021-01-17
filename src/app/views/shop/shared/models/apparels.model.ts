import { Apparel } from '../interfaces/apparel.interface';
import { ApparelType } from '../const/apparel-type.enum';

export class Apparels {
  public accessories: Apparel[];
  public jackets: Apparel[];
  public sneakers: Apparel[];
  public tShirts: Apparel[];

  public static filterByType = (apparel: Apparel[], type: ApparelType): Apparel[] =>
    apparel.filter((apparel: Apparel) => apparel.type === String(type)) || [];

  constructor(public all: Apparel[] = []) {
    this.accessories = Apparels.filterByType(all, ApparelType.accessory);
    this.sneakers = Apparels.filterByType(all, ApparelType.sneaker);
    this.tShirts = Apparels.filterByType(all, ApparelType.tShirt);
    this.jackets = Apparels.filterByType(all, ApparelType.jacket);
  }
}
