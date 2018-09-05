import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class ShopGuard implements CanDeactivate<any> {

  public canDeactivate(component: any): boolean {
    if (component.isDirty) {
      const title = component.shop.title || 'New shop';
      return confirm(`Lose all changes to ${title}?`);
    }

    return true;
  }
}
