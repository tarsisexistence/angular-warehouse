import * as ApparelCartActions from '+store/actions/apparel.cart.action';
import {
  CartApparel,
  CartApparelEntities
} from '-shop/shared/interfaces/cart-apparel.interface';

export interface CartApparelState {
  entities: CartApparelEntities;
  loaded: boolean;
  loading: boolean;
}

export const initialState: CartApparelState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: ApparelCartActions.ApparelCartAction
): CartApparelState {
  switch (action.type) {
    case ApparelCartActions.ApparelCartActionTypes.AddApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.AddApparelFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.FetchApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.AddApparelSuccess:
    case ApparelCartActions.ApparelCartActionTypes.FetchApparelSuccess: {
      const apparels: CartApparel[] = action.payload;
      const entities = apparels.reduce(
        (entities: CartApparelEntities, apparel: CartApparel) => ({
          ...entities,
          [apparel.id]: apparel
        }),
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.FetchApparelFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparelSuccess: {
      const id = action.payload;
      const entities = Object.keys(state.entities).reduce(
        (entities: CartApparelEntities, entitiyId: string) => {
          if (entitiyId === String(id)) {
            return entities;
          }

          return {
            ...entities,
            [entitiyId]: state.entities[entitiyId]
          };
        },
        {}
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparelFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }
  }
  return state;
}

export const getCartEntities = (state: CartApparelState) => state.entities;
export const getCartLoading = (state: CartApparelState) => state.loading;
export const getCartLoaded = (state: CartApparelState) => state.loaded;
