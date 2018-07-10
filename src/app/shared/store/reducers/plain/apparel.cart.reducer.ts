import * as ApparelCartActions from './../../actions/apparel.cart.actions';
import { Apparel } from '../../../../shop/shared/apparel.interface';

export interface ApparelState {
  data: Apparel[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ApparelState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
    state = initialState,
    action: ApparelCartActions.ApparelCartAction
): ApparelState {
  switch (action.type) {
    case ApparelCartActions.ApparelCartActionTypes.AddApparel: {
      return {
        ...state,
        loading: true
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.AddApparelSuccess: {
      const data = [...state.data, action.payload];
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.AddApparelFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.FetchApparel: {
      return {
        ...state,
        loading: true
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.FetchApparelSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.FetchApparelFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparel: {
      return {
        ...state,
        loading: true
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparelSuccess: {
      const data: Apparel[] = state.data.filter((apparel: Apparel, index: number) => index !== action.payload);
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparelFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getCartLoading = (state: ApparelState) => state.loading;
export const getCartLoaded = (state: ApparelState) => state.loaded;
export const getCart = (state: ApparelState) => state.data;
