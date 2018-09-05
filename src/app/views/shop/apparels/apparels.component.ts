import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';

import { Apparel } from '../shared/apparel.interface';

@Component({
  selector: 'shop-apparels',
  templateUrl: './apparels.component.html',
  styleUrls: ['./apparels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApparelsComponent {
  @Input() public apparels: Apparel[];
  @Output() public addToCartEmitter: EventEmitter<Apparel> = new EventEmitter<Apparel>();

  constructor() {
  }

  public addToCart(apparel: Apparel): void {
    this.addToCartEmitter.emit(apparel);
  }

  public identify(index: number, apparel: Apparel): string {
    return apparel.id;
  }
}
