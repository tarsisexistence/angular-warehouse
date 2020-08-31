import { createFeatureSelector, createSelector } from '@ngrx/store';

import { States } from 'store/states';
import type { UserState } from 'store/reducers/user.auth.reducer';

export interface AuthState {
  user: UserState;
}

const getAuthState = createFeatureSelector<AuthState>(States.Auth);
const getUserAuthState = createSelector(getAuthState, (state: AuthState) => state.user);

export const getUser = createSelector(getUserAuthState, (state: UserState) => state.user);
