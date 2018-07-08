import { Injectable } from '@angular/core';

import {
  Access,
  StorageUser
} from './interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

const storageKey = 'cspr';

@Injectable()
export class AuthService {
  public user$: BehaviorSubject<StorageUser> = new BehaviorSubject<StorageUser>(null);

  constructor() {
    const user: StorageUser = this.getUser();

    if (user) {
      this.user$.next(user);
    }
  }

  public signIn({ email, password }: Access): void {
  }

  public clearUser(): void {
    localStorage.removeItem(storageKey);
    this.user$.next(null);
  }

  public updateUserStorage({ token, active = false }: StorageUser): void {
    const storageUser: StorageUser = {
      token,
      active
    };
    localStorage.setItem(storageKey, JSON.stringify(storageUser));
    this.user$.next(storageUser);
  }

  public getUser(): StorageUser {
    return JSON.parse(localStorage.getItem(storageKey));
  }
}
