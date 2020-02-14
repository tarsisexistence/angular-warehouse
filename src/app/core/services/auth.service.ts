import { Injectable } from '@angular/core';

import { StorageUser } from 'core/shared/interfaces/user.interface';

const storageKey = 'cspr';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public static fetchStorageUser(): StorageUser {
    return JSON.parse(localStorage.getItem(storageKey));
  }

  public static removeStorageUser(): void {
    localStorage.removeItem(storageKey);
  }

  public static updateStorageUser(token: StorageUser): void {
    localStorage.setItem(storageKey, JSON.stringify(token));
  }
}
