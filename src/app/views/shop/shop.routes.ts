import { ModuleWithProviders } from '@angular/core';
import {
	RouterModule,
	Routes
} from '@angular/router';

import { ShopComponent } from '@shop/containers/shop/shop.component';
import { ShopResolver } from '@shop/shared/guards-and-resolvers/shop.resolver';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'all'
	},
	{
		path: 'all',
		component: ShopComponent
	},
	{
		path: ':category',
		resolve: { category: ShopResolver },
		component: ShopComponent
	}
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(routes);
