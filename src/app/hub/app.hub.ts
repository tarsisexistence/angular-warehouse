import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { connectFeatures, createRoot } from 'routeshub';

import { APP_UNIT_KEY, AppNotes } from './app.notes';
import { appRoutes } from './app.routes';
import { shopConnector } from '-shop/hub/shop.hub';
import { userCenterConnector } from '-user-center/hub/user-center.hub';
import { CustomPreloadingStrategy } from '~app/hub/preloading';
import { locationConnector } from '-location/hub/location.hub';
import { homeConnector } from '-home/hub/home.hub';

createRoot<AppNotes>(appRoutes, {
  key: APP_UNIT_KEY,
  routeName: { root: 'home', wildcard: 'notFound' }
});

connectFeatures<AppNotes>(APP_UNIT_KEY, {
  home: homeConnector,
  shop: shopConnector,
  userCenter: userCenterConnector,
  location: locationConnector
});

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  enableTracing: false,
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
  preloadingStrategy: CustomPreloadingStrategy
});

@NgModule({
  imports: [appRouting],
  exports: [RouterModule]
})
export class AppHub {}
