import {
	Component,
	Input,
	ChangeDetectionStrategy
} from '@angular/core';
import { Apparel } from '../shared/apparel.interface';
import { CartService } from '../../shared/cart.service';

@Component({
	selector: 'shop-apparels',
	templateUrl: './apparels.component.html',
	styleUrls: ['./apparels.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApparelsComponent {
	@Input() public apparels: Apparel[];

	constructor(private cartService: CartService) {
	}

	public addToCart(apparel: Apparel): void {
		this.cartService.addCartApparel(apparel);
	}
}
