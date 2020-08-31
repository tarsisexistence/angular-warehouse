import { Injectable } from '@angular/core';

import { Apparel } from 'shop/shared/interfaces/apparel.interface';

const storageKey = 'cspcart';

@Injectable({ providedIn: 'root' })
export class CartService {
  public static addApparelToCart(apparel: Apparel): Apparel {
    const apparels = CartService.fetchStorageApparel();
    CartService.updateStorage([...apparels, apparel]);

    return apparel;
  }

  public static emptyCart(): void {
    localStorage.removeItem(storageKey);
  }

  public static fetchStorageApparel(): Apparel[] {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  }

  public static removeApparelFromCart(id: string): string {
    const apparels = CartService.fetchStorageApparel();
    const cartApparels: Apparel[] = apparels.filter((apparel: Apparel) => apparel.id !== id);

    CartService.updateStorage(cartApparels);

    return id;
  }

  private static updateStorage(apparel: Apparel[]): void {
    localStorage.setItem(storageKey, JSON.stringify(apparel));
  }
}
