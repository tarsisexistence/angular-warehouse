import { Apparel } from '@shop/shared/apparel.interface';
import * as ApparelShopActions from '@shared/store/actions/apparel.shop.actions';

export interface ApparelState {
  entities: { [id: string]: Apparel };
  loaded: boolean;
  loading: boolean;
}

export const initialState: ApparelState = {
  entities: {},
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
      const entities = action.payload.reduce(
          (entities: { [id: number]: Apparel }, apparel: Apparel) => (
              {
                ...entities,
                [apparel.id]: apparel
              }
          ),
          { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
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

export const getApparelEntities = (state: ApparelState) => state.entities;
export const getApparelLoading = (state: ApparelState) => state.loading;
export const getApparelLoaded = (state: ApparelState) => state.loaded;
