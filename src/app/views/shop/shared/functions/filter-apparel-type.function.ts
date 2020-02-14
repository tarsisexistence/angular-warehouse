import { Apparel } from 'shop/shared/interfaces/apparel.interface';
import { ApparelType } from 'shop/shared/enums/apparel-type.enum';

export const filterApparelType = (
  apparel: Apparel[],
  type: ApparelType
): Apparel[] =>
  apparel.filter((aprl: Apparel) => aprl.type === String(type)) || [];
