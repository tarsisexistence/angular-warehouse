import { Apparel } from '../../../../shop/shared/apparel.interface';
import * as ApparelShopActions from '../../actions/apparel.shop.actions';

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
    action: ApparelShopActions.ApparelShopAction
): ApparelState {
  switch (action.type) {
    case ApparelShopActions.ApparelShopActionTypes.LoadApparel: {
      return {
        ...state,
        loading: true
      };
    }

    case ApparelShopActions.ApparelShopActionTypes.LoadApparelSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }

    case ApparelShopActions.ApparelShopActionTypes.LoadApparelFail: {
      return {
        loading: false,
        ...state,
        loaded: false
      };
    }
  }
  return state;
}

export const getApparelLoading = (state: ApparelState) => state.loading;
export const getApparelLoaded = (state: ApparelState) => state.loaded;
export const getApparel = (state: ApparelState) => state.data;