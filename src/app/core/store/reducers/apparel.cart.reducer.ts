import * as ApparelCartActions from '+store/actions/apparel.cart.action';
import {
  CartApparel,
  CartApparelEntities
} from '-shop/shared/interfaces/cart-apparel.interface';
import { Apparel } from '-shop/shared/interfaces/apparel.interface';

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

    case ApparelCartActions.ApparelCartActionTypes.AddApparelSuccess: {
      const apparel: CartApparel = action.payload;
      const isExist = Object.keys(state.entities).some(
        (apparelId: string) => apparelId === apparel.id
      );

      let entities: CartApparelEntities = null;

      if (!isExist) {
        entities = {
          ...state.entities,
          [apparel.id]: apparel
        };
      } else {
        const cartApparel = state.entities[apparel.id];
        const updatedApparel = {
          ...cartApparel,
          quantities: cartApparel.quantities + 1
        };
        entities = {
          ...state.entities,
          [apparel.id]: updatedApparel
        };
      }

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.AddApparelFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.ClearApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.ClearApparelSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {}
      } as CartApparelState;
    }

    case ApparelCartActions.ApparelCartActionTypes.ClearApparelFailure: {
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

    case ApparelCartActions.ApparelCartActionTypes.FetchApparelSuccess: {
      const apparels: Apparel[] = action.payload;
      const entities = apparels.reduce(
        (
          apparels: CartApparelEntities,
          apparel: Apparel
        ): CartApparelEntities => {
          const duplicateApparel = apparels[apparel.id];
          const quantities =
            duplicateApparel !== undefined
              ? duplicateApparel.quantities + 1
              : 1;
          const cartApparel = {
            ...apparel,
            quantities
          };

          return {
            ...apparels,
            [apparel.id]: cartApparel
          };
        },
        {} as CartApparelEntities
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.FetchApparelFailure: {
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

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparelFailure: {
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
