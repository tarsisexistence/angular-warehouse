import { AuthActionsUnion, AuthActionTypes } from 'store/actions/user.auth.action';
import { User } from 'core/shared/interfaces/user.interface';

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

export function userReducer(state = initialState, action: AuthActionsUnion): UserState {
  switch (action.type) {
    case AuthActionTypes.FetchUser: {
      return {
        ...state,
        loading: true
      };
    }

    case AuthActionTypes.FetchUserSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        loggedIn: true,
        user: action.payload
      };
    }

    case AuthActionTypes.FetchUserFailure: {
      return initialState;
    }

    case AuthActionTypes.SignIn: {
      return {
        ...state,
        loading: true
      };
    }

    case AuthActionTypes.SignInSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        loggedIn: true,
        user: action.payload
      };
    }

    case AuthActionTypes.SignInFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case AuthActionTypes.SignUp: {
      return {
        ...state,
        loading: true
      };
    }

    case AuthActionTypes.SignUpSuccess: {
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

    case AuthActionTypes.SignUpFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case AuthActionTypes.SignUpCatchPhrase: {
      return {
        ...state,
        loading: true
      };
    }

    case AuthActionTypes.SignUpCatchPhraseSuccess: {
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

    case AuthActionTypes.SignUpCatchPhraseFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case AuthActionTypes.SignOut: {
      return initialState;
    }

    default:
      return state;
  }
}
