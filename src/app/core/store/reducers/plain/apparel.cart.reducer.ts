import * as ApparelCartActions from '@store/actions/apparel.cart.action';
import { Apparel } from '@shop/shared/interfaces/apparel.interface';

export interface ApparelState {
  entities: { [id: number]: Apparel }
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
      const entities = {
        ...state.entities,
        [action.payload.id]: action.payload
      };

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
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
      const apparels: Apparel[] = action.payload;
      const entities = apparels.reduce(
          (entities: { [id: number]: Apparel }, apparel: Apparel) => (
              {
                ...entities,
                [apparel.id]: apparel
              }
          ),
          {
            ...state.entities
          });

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
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparel: {
      return {
        ...state,
        loading: true
      };
    }

    case ApparelCartActions.ApparelCartActionTypes.RemoveApparelSuccess: {
      const id = action.payload;
      const entities = Object.keys(state.entities).reduce(
          (entities: { [id: number]: Apparel }, entitiyId: string) => {
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
      };
    }
  }
  return state;
}

export const getCartEntities = (state: ApparelState) => state.entities;
export const getCartLoading = (state: ApparelState) => state.loading;
export const getCartLoaded = (state: ApparelState) => state.loaded;
