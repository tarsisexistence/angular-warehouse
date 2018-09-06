import { Injectable } from '@angular/core';

import { StorageUser } from '@auth/shared/interfaces/user.interface';

const storageKey = 'cspr';

@Injectable({ providedIn: 'root' })
export class AuthService {

  public fetchStorageUser(): StorageUser {
    return JSON.parse(localStorage.getItem(storageKey));
  }

  public removeStorageUser(): void {
    localStorage.removeItem(storageKey);
  }

  public updateStorageUser(token: StorageUser): void {
    localStorage.setItem(storageKey, JSON.stringify(token));
  }
}
