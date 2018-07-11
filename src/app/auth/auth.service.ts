import { Injectable } from '@angular/core';

import { StorageUser } from './interfaces/user.interface';

const storageKey = 'cspr';

@Injectable()
export class AuthService {
  constructor() {
  }

  public getUserFromLS(): StorageUser {
    return JSON.parse(localStorage.getItem(storageKey));
  }

  public clearUser(): void {
    localStorage.removeItem(storageKey);
  }

  public updateUserStorage(token: StorageUser): void {
    localStorage.setItem(storageKey, JSON.stringify(token));
  }
}
