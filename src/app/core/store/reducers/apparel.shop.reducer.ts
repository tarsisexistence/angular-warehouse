import { ApparelShopAction, ApparelShopActionTypes } from 'store/actions/apparel.shop.action';
import { Apparel } from 'shop/shared/interfaces/apparel.interface';

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

export function shopReducer(state = initialState, action: ApparelShopAction): ApparelState {
  switch (action.type) {
    case ApparelShopActionTypes.LoadApparel: {
      return {
        ...state,
        loading: true
      };
    }

    case ApparelShopActionTypes.LoadApparelSuccess: {
      const entities = action.payload.reduce(
        (accEntities: { [id: number]: Apparel }, apparel: Apparel) => ({
          ...accEntities,
          [apparel.id]: apparel
        }),
        { ...state.entities }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case ApparelShopActionTypes.LoadApparelFailure: {
      return {
        loading: false,
        ...state,
        loaded: false
      };
    }

    default:
      return state;
  }
}
