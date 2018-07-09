import * as fromApparel from '../../actions/apparel.action';
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
    action: fromApparel.ApparelAction
): ApparelState {
  switch (action.type) {
    case fromApparel.LOAD_APPAREL: {
      return {
        ...state,
        loading: true
      };
    }

    case fromApparel.LOAD_APPAREL_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }

    case fromApparel.LOAD_APPAREL_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getApparelLoading = (state: ApparelState) => state.loading;
export const getApparelLoaded = (state: ApparelState) => state.loaded;
export const getApparel = (state: ApparelState) => state.data;