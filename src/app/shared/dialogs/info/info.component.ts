import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ShopRules } from 'core/shared/interfaces/shop-rules.interface';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ShopRules) {}

  public identify(index: number): number {
    return index;
  }
}
