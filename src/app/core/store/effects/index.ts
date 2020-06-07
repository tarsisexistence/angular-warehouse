import { ApparelEffects } from 'store/effects/apparel.shop.effect';
import { CartEffects } from 'store/effects/apparel.cart.effect';
import { UserEffects } from 'store/effects/user.auth.effect';
import { RouterEffects } from 'store/effects/router.effect';

export const shopEffects: any[] = [ApparelEffects];
export const cartEffects: any[] = [CartEffects];
export const authEffects: any[] = [UserEffects];
export const routerEffects: any[] = [RouterEffects];
