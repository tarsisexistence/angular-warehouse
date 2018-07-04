import {
	ChangeDetectionStrategy,
	Component,
	OnInit
} from '@angular/core';
import { Stocklist } from '../../shared/interfaces/stocklist.interface';
import { stocklists } from '../../shared/constants/stocklists.constant';

@Component({
	selector: 'app-stocklists',
	templateUrl: './stocklists.component.html',
	styleUrls: ['./stocklists.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StocklistsComponent implements OnInit {
	public stocklists: Stocklist[];

	ngOnInit() {
		this.stocklists = stocklists;
	}
}
