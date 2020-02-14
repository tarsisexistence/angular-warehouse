import { ApparelEffect } from 'store/effects/apparel.shop.effect';
import { CartEffect } from 'store/effects/apparel.cart.effect';
import { UserEffect } from 'store/effects/user.auth.effect';
import { RouterEffect } from 'store/effects/router.effect';

export * from 'store/effects/apparel.shop.effect';
export * from 'store/effects/apparel.cart.effect';
export * from 'store/effects/user.auth.effect';
export * from 'store/effects/router.effect';

export const shopEffects: any[] = [ApparelEffect];
export const cartEffects: any[] = [CartEffect];
export const authEffects: any[] = [UserEffect];
export const routerEffects: any[] = [RouterEffect];
