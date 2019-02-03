import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Slice } from 'routeshub';

import { ShopRoutes, shopSlice } from '-shop/hub';

@Component({
  selector: 'home-action',
  templateUrl: './home-action.component.html',
  styleUrls: ['./home-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeActionComponent implements OnInit {
  public slice: Slice<ShopRoutes>;

  public ngOnInit(): void {
    this.slice = shopSlice;
  }
}
