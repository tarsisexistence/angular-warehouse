import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Slice } from 'routeshub';

import { ShopNotes } from '-shop/hub/shop.notes';
import { shopSlice } from '-shop/hub/shop.routes';

@Component({
  selector: 'home-action',
  templateUrl: './home-action.component.html',
  styleUrls: ['./home-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeActionComponent implements OnInit {
  public slice: Slice<ShopNotes>;

  public ngOnInit(): void {
    this.slice = shopSlice;
  }
}
