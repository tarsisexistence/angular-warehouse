import { ModuleWithProviders } from '@angular/core';
import {
	RouterModule,
	Routes
} from '@angular/router';

import { shopRoute as ROUTE } from '$route-store/routes/shop.route';
import { ShopComponent } from '-shop/containers/shop/shop.component';
import { ShopResolver } from '-shop/shared/guards-and-resolvers/shop.resolver';

export const routes: Routes = [
	{
		path: ROUTE.root.path,
		pathMatch: 'full',
		redirectTo: ROUTE.all.path
	},
	{
		path: ROUTE.all.path,
		component: ShopComponent
	},
	{
		path: ROUTE.category.path,
		resolve: { category: ShopResolver },
		component: ShopComponent
	}
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(routes);
