import { Injectable } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { Apparel } from '@shop/shared/apparel.interface';

const storageKey = 'cspcart';

@Injectable({ providedIn: SharedModule })
export class CartService {
  public addApparelToCart(apparel: Apparel): Apparel {
    const cartApparels = this.fetchStorageApparel();
    this.updateStorage([...cartApparels, apparel]);

    return apparel;
  }

  public removeApparelFromCart(sequenceNumber: number): number {
    const apparelsInLS = this.fetchStorageApparel();
    const cartApparels: Apparel[] = apparelsInLS.filter((
        cartApparel: Apparel,
        index: number
    ) => index !== sequenceNumber);
    this.updateStorage(cartApparels);

    return sequenceNumber;
  }

  public clearCart(): void {
    localStorage.removeItem(storageKey);
  }

  public fetchStorageApparel(): Apparel[] {
    const apparelInLS: Apparel[] = JSON.parse(localStorage.getItem(storageKey));
    return apparelInLS ? apparelInLS : [];
  }

  private updateStorage(apparel: Apparel[]): void {
    localStorage.setItem(storageKey, JSON.stringify(apparel));
  }
}
