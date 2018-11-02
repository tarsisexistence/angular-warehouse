import { Injectable } from '@angular/core';

import {
  CartApparel,
  CartApparelEntities
} from '-shop/shared/interfaces/cart-apparel.interface';

const storageKey = 'cspcart';

@Injectable({ providedIn: 'root' })
export class CartService {
  public addApparelToCart(apparel: CartApparel): CartApparelEntities {
    const apparelEntities = this.fetchStorageApparel();

    const entities = Object.keys(apparelEntities).reduce(
      (entities: CartApparelEntities, id: string) => {
        if (id === apparel.id) {
          apparelEntities[id].quantities += 1;
        }

        return {
          ...entities,
          [id]: apparelEntities[id]
        };
      },
      {}
    );

    this.updateStorage(entities);

    return apparels;
  }

  public removeApparelFromCart(id: string): string {
    const apparels = this.fetchStorageApparel();
    const cartApparels: CartApparel[] = apparels.filter(
      (apparel: CartApparel) => apparel.id !== id
    );
    this.updateStorage(cartApparels);

    return id;
  }

  public emptyCart(): void {
    localStorage.removeItem(storageKey);
  }

  public fetchStorageApparel(): CartApparelEntities {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  }

  private updateStorage(apparel: CartApparelEntities): void {
    localStorage.setItem(storageKey, JSON.stringify(apparel));
  }
}
