import {
  ApparelShopActionTypes,
  LoadApparel,
  LoadApparelFail,
  LoadApparelSuccess
} from '@shared/store';

describe('Apparel Actions', () => {

  describe('LoadApparel Actions', () => {
    describe('LoadApparel', () => {
      it('should create an action', () => {
        const action = new LoadApparel();
        expect({ ...action }).toEqual({
          type: ApparelShopActionTypes.LoadApparel
        });
      });
    });

    describe('LoadApparelFail', () => {
      it('should create an action', () => {
        const action = new LoadApparel();
        const payload = { message: 'Load Error ' };
        expect({ ...action }).toEqual({
          type: ApparelShopActionTypes.LoadApparel,
          payload
        });
      });

      describe('LoadApparelFail', () => {
        it('should create an action', () => {
          const payload = { message: 'Load Error ' };
          const action = new LoadApparelFail(payload);
          expect({ ...action }).toEqual({
            type: ApparelShopActionTypes.LoadApparelFail,
            payload
          });
        });

      });

      describe('LoadApparelSuccess', () => {
        it('should create an action', () => {
          const payload = [
            {
              attribute: 'AW18',
              color: 'Black',
              description: 'Comfortable black winter hat Mern in urban style',
              id: 'b15e7530-7f7c-11e8-9c53-b56bf3099e82',
              image: 'https://static1.squarespace.com/static/590f23022994cac296d0b74a/592527f937c581ebeda537a8/59df90acd55b41672e731f23/1507823979476/DSC_0003.jpg?format=1500w',
              price: 19.99,
              title: 'Winter Hat Mern',
              type: 'accessories'
            }
          ];
          const action = new LoadApparelSuccess(payload);

          expect({ ...action }).toEqual({
            type: ApparelShopActionTypes.LoadApparelSuccess,
            payload
          });
        });

      });
    });

  });
});