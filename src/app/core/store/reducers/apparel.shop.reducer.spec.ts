import * as fromReducer from './apparel.shop.reducer';
import {
  LoadApparel,
  LoadApparelFail,
  LoadApparelSuccess
} from '+store/index';
import { Apparel } from '-shop/shared/interfaces/apparel.interface';

describe('ApparelShopReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {} as any;
      const state = fromReducer.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_APPAREL action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromReducer;
      const action = new LoadApparel();
      const state = fromReducer.reducer(initialState, action);

      expect(state.entities).toBe(initialState.entities);
      expect(state.loading).toBe(true);
      expect(state.loaded).toBe(false);
    });
  });

  // describe('LOAD_APPAREL_SUCCESS action', () => {
  //   it('should map an array to entities', () => {
  //     const apparels: Apparel[] = [
  //       {
  //         attribute: 'AW18',
  //         color: 'Black',
  //         description: 'Comfortable black winter hat Mern in urban style',
  //         id: 'b15e7530-7f7c-11e8-9c53-b56bf3099e82',
  //         image:
  // 'https://static1.squarespace.com/static/590f23022994cac296d0b74a/592527f937c581ebeda537a8/59df90acd55b41672e731f23/1507823979476/DSC_0003.jpg?format=1500w',
  // price: 19.99, title: 'Winter Hat Mern', type: 'accessories' } ]; const entities = {
  // 'b15e7530-7f7c-11e8-9c53-b56bf3099e82': apparels[0] }; const { initialState } = fromReducer; const action = new
  // LoadApparelSuccess(apparels); const state = fromReducer.reducer(initialState, action);
  // expect({...state.entities}).toBe(entities); expect(state.loading).toBe(false); expect(state.loaded).toBe(true);
  // }); });

  describe('LOAD_APPAREL_FAIL action', () => {
    it('should be failed', () => {
      const payload = { message: 'Load Error ' };
      const { initialState } = fromReducer;
      const action = new LoadApparelFail(payload);
      const state = fromReducer.reducer(initialState, action);

      expect(state.entities).toBe(initialState.entities);
      expect(state.loading).toBe(false);
      expect(state.loaded).toBe(false);
    });
  });
});