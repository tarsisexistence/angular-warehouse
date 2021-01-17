import { ApparelCartAction, ApparelCartActionTypes } from 'store/actions/apparel.cart.action';
import { CartApparel, CartApparelEntities } from 'shop/shared/interfaces/cart-apparel.interface';
import { Apparel } from 'shop/shared/interfaces/apparel.interface';

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

export function cartReducer(state = initialState, action: ApparelCartAction): CartApparelState {
  switch (action.type) {
    case ApparelCartActionTypes.AddApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActionTypes.AddApparelSuccess: {
      const apparel: CartApparel = action.payload;
      const isExist = Object.keys(state.entities).some((apparelId: string) => apparelId === apparel.id);

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

    case ApparelCartActionTypes.AddApparelFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }

    case ApparelCartActionTypes.ClearApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActionTypes.ClearApparelSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
        entities: {}
      } as CartApparelState;
    }

    case ApparelCartActionTypes.ClearApparelFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }

    case ApparelCartActionTypes.FetchApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActionTypes.FetchApparelSuccess: {
      const apparels: Apparel[] = action.payload;
      const entities = apparels.reduce((accApparels: CartApparelEntities, apparel: Apparel): CartApparelEntities => {
        const duplicateApparel = apparels[apparel.id];
        const quantities = duplicateApparel !== undefined ? duplicateApparel.quantities + 1 : 1;
        const cartApparel = {
          ...apparel,
          quantities
        };

        return {
          ...accApparels,
          [apparel.id]: cartApparel
        };
      }, {} as CartApparelEntities);

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ApparelCartActionTypes.FetchApparelFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }

    case ApparelCartActionTypes.RemoveApparel: {
      return {
        ...state,
        loading: true
      } as CartApparelState;
    }

    case ApparelCartActionTypes.RemoveApparelSuccess: {
      const id = action.payload;
      const entities = Object.keys(state.entities).reduce((accEntities: CartApparelEntities, entityId: string) => {
        if (entityId === String(id)) {
          return entities;
        }

        return {
          ...accEntities,
          [entityId]: state.entities[entityId]
        };
      }, {});

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ApparelCartActionTypes.RemoveApparelFailure: {
      return {
        ...state,
        loading: false,
        loaded: false
      } as CartApparelState;
    }

    default:
      return state;
  }
}
