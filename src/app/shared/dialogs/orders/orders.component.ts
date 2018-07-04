import {
	ChangeDetectionStrategy,
	Component,
	Inject
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ShopRules } from '../../interfaces/shop-rules.interface';

@Component({
	selector: 'app-orders-dialog',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {

	constructor(@Inject(MAT_DIALOG_DATA) public data: ShopRules) {
	}
}
