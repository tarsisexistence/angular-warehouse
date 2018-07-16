import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { Apollo } from 'apollo-angular';

import {
  hot,
  cold
} from 'jasmine-marbles';
import {
  Observable,
  EMPTY,
  of
} from 'rxjs';

import * as fromEffects from './apparel.shop.effect';
import * as fromActions from '@shared/store/actions/apparel.shop.action';
import { ApolloService } from '@app/apollo';

export class ApparelShopTestActions extends Actions {
  constructor() {
    super(EMPTY);
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new ApparelShopTestActions();
}

describe('ApparelShopEffects', () => {
  let actions$: ApparelShopTestActions;
  let service: ApolloService;
  let effects: fromEffects.ApparelEffect;

  const apparel = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        Apollo,
        ApolloService,
        fromEffects.ApparelEffect,
        {
          provide: Actions,
          useFactory: getActions
        }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(ApolloService);
    effects = TestBed.get(fromEffects.ApparelEffect);

    spyOn(service, 'getAllApparel').and.returnValue(of(apparel));
  });

  // describe('loadApparel$', () => {
  //   it('should return a collection from LoadApparelSuccess', () => {
  //     const action = new fromActions.LoadApparel();
  //     const completion = new fromActions.LoadApparelSuccess(apparel);
  //
  //     actions$.stream = hot('-a', { a: action });
  //     const expected = cold('-b', { b: completion });
  //
  //     expect(effects.loadApparels$).toBeObservable(expected);
  //   });
  // });
});
