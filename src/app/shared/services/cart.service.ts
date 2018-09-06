import { Injectable } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { Apparel } from '@shop/shared/apparel.interface';

const storageKey = 'cspcart';

@Injectable({ providedIn: SharedModule })
export class CartService {
  public addApparelToCart(apparel: Apparel): Apparel {
    const apparels = this.fetchStorageApparel();
    this.updateStorage([...apparels, apparel]);

    return apparel;
  }

  public removeApparelFromCart(id: string): string {
    const apparels = this.fetchStorageApparel();
    const cartApparels: Apparel[] = apparels.filter((apparel: Apparel) => apparel.id !== id);
    this.updateStorage(cartApparels);

    return id;
  }

  public emptyCart(): void {
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
