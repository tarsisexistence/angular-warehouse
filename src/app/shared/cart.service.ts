import { Injectable } from '@angular/core';

import { SharedModule } from './shared.module';
import { Apparel } from '@shop/shared/apparel.interface';

const storageKey = 'cspcart';

@Injectable({ providedIn: SharedModule })
export class CartService {

  constructor() {
  }

  public addApparelToCart(apparel: Apparel): Apparel {
    const cartApparels = this.fetchApparelFromLS();
    this.updateLS([...cartApparels, apparel]);

    return apparel;
  }

  public removeApparelFromCart(sequenceNumber: number): number {
    const apparelsInLS = this.fetchApparelFromLS();
    const cartApparels: Apparel[] = apparelsInLS.filter((
        cartApparel: Apparel,
        index: number
    ) => index !== sequenceNumber);
    this.updateLS(cartApparels);

    return sequenceNumber;
  }

  public clearCart(): void {
    localStorage.removeItem(storageKey);
  }

  public fetchApparelFromLS(): Apparel[] {
    const apparelInLS: Apparel[] = JSON.parse(localStorage.getItem(storageKey));
    return apparelInLS ? apparelInLS : [];
  }

  private updateLS(apparel: Apparel[]): void {
    localStorage.setItem(storageKey, JSON.stringify(apparel));
  }
}
