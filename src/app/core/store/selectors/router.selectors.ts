import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';

import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = { routerReducer };

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return {
      url,
      queryParams,
      params
    };
  }
}
