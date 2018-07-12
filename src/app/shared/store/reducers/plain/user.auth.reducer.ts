import * as UserAuthActions from './../../actions/user.auth.actions';
import { User } from '../../../../auth/interfaces/user.interface';

export interface UserState {
  user: User | null;
  loaded: boolean;
  loading: boolean;
  loggedIn: boolean;
}

export const initialState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  loggedIn: false
};

export function reducer(
    state = initialState,
    action: UserAuthActions.AuthActionsUnion
): UserState {
  switch (action.type) {
    case UserAuthActions.AuthActionTypes.FetchUser: {
      return {
        ...state,
        loading: true
      };
    }

    case UserAuthActions.AuthActionTypes.FetchUserSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        loggedIn: true,
        user: action.payload
      };
    }

    case UserAuthActions.AuthActionTypes.FetchUserFailure: {
      return initialState;
    }

    case UserAuthActions.AuthActionTypes.SignIn: {
      return {
        ...state,
        loading: true
      };
    }

    case UserAuthActions.AuthActionTypes.SignInSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        loggedIn: true,
        user: action.payload
      };
    }

    case UserAuthActions.AuthActionTypes.SignInFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case UserAuthActions.AuthActionTypes.SignUp: {
      return {
        ...state,
        loading: true
      };
    }

    case UserAuthActions.AuthActionTypes.SignUpSuccess: {
      const user: User = {
        id: action.payload.id,
        email: action.payload.email,
        catchPhrase: null
      };
      return {
        ...state,
        loading: false,
        loaded: true,
        loggedIn: true,
        user
      };
    }

    case UserAuthActions.AuthActionTypes.SignUpFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case UserAuthActions.AuthActionTypes.SignUpCatchPhrase: {
      return {
        ...state,
        loading: true
      };
    }

    case UserAuthActions.AuthActionTypes.SignUpCatchPhraseSuccess: {
      const user: User = {
        id: state.user.id,
        email: state.user.email,
        catchPhrase: action.payload.catchPhrase
      };
      return {
        ...state,
        loading: false,
        loaded: true,
        loggedIn: true,
        user
      };
    }

    case UserAuthActions.AuthActionTypes.SignUpCatchPhraseFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case UserAuthActions.AuthActionTypes.SignOut: {
      return initialState;
    }
  }
  return state;
}

export const getUserLoading = (state: UserState) => state.loading;
export const getUserLoaded = (state: UserState) => state.loaded;
export const getUser = (state: UserState) => state.user;
