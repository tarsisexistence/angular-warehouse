import { createFeatureSelector, createSelector } from '@ngrx/store';

import { States } from '+store/states';
import * as fromUserReducer from '+store/reducers/user.auth.reducer';

export interface AuthState {
  user: fromUserReducer.UserState;
}

const getAuthState = createFeatureSelector<AuthState>(States.Auth);
const getUserAuthState = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getUser = createSelector(
  getUserAuthState,
  fromUserReducer.getUser
);
export const getUserLoading = createSelector(
  getUserAuthState,
  fromUserReducer.getUserLoading
);
export const getUserLoaded = createSelector(
  getUserAuthState,
  fromUserReducer.getUserLoaded
);
