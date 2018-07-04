import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class ShopEditGuard implements CanDeactivate<any> {
  // N Things You Didn’t Know About the Router - Deborah Kurata
  public canDeactivate(component: any): boolean {
    if (component.isDirty) {
      const title = component.shop.title || 'New shop';
      return confirm(`Lose all changes to ${title}?`);
    }

    return true;
  }
}
