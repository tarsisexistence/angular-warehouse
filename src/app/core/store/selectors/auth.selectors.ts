import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromUserReducer from '+store/reducers/user.auth.reducer';
import { authState } from '+store/states';

export interface AuthState {
  user: fromUserReducer.UserState
}

export const getAuthState = createFeatureSelector<AuthState>(authState);

export const getUserAuthState = createSelector(
    getAuthState,
    (state: AuthState) => state.user
);

export const getUser = createSelector(getUserAuthState, fromUserReducer.getUser);
export const getUserLoading = createSelector(getUserAuthState, fromUserReducer.getUserLoading);
export const getUserLoaded = createSelector(getUserAuthState, fromUserReducer.getUserLoaded);