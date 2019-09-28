import { Routes } from '@angular/router';

// tslint:disable-next-line:max-line-length
import { LocationStocklistComponent } from '../components/location-stocklist/location-stocklist.component';
import { LocationComponent } from '../containers/location/location.component';

export const locationRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'map'
  },
  {
    path: 'map',
    component: LocationComponent
  },
  {
    path: 'stocklist',
    component: LocationStocklistComponent
  }
];
