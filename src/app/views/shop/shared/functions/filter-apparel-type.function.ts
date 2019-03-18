import { Apparel } from '-shop/shared/interfaces/apparel.interface';
import { ApparelType } from '-shop/shared/enums/apparel-type.enum';

export function filterApparelType(
  apparel: Apparel[],
  type: ApparelType
): Apparel[] {
  return (
    apparel.filter((apparel: Apparel) => apparel.type === String(type)) || []
  );
}
