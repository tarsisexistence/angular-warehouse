import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Slice } from 'routeshub';

import { ShopNotes, shopSlice } from '-shop/hub';

@Component({
  selector: 'shop-bar',
  templateUrl: './shop-bar.component.html',
  styleUrls: ['./shop-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopBarComponent implements OnInit {
  @Input() public categories: string[];
  public slice: Slice<ShopNotes>;

  public ngOnInit(): void {
    this.slice = shopSlice;
  }

  public identify(index: number): number {
    return index;
  }
}
