import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Stocklist } from 'core/shared/interfaces/stocklist.interface';
import { stocklist } from 'core/shared/constants/stocklist';

@Component({
  selector: 'location-stocklist',
  templateUrl: './location-stocklist.component.html',
  styleUrls: ['./location-stocklist.component.scss'],
  host: { class: 'stocklist' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationStocklistComponent implements OnInit {
  public stocklist: Stocklist[];

  public ngOnInit(): void {
    this.stocklist = stocklist;
  }

  public identify(index: number): number {
    return index;
  }
}
