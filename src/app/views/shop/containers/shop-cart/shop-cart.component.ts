import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';

import {
  merge,
  Observable,
  Subject
} from 'rxjs';
import {
  debounceTime,
  mapTo,
  takeUntil
} from 'rxjs/operators';

@Component({
  selector: 'shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartComponent implements OnInit, OnDestroy {
  @Input() public totalCounter: number;
  @Output() public userCounterChange = new EventEmitter<void>();

  public showBubble$: Observable<boolean>;
  public bubbleMessage: string;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    const change$ = this.userCounterChange.asObservable();
    const showBubble$ = change$.pipe(
        takeUntil(this.ngUnsubscribe),
        mapTo(true)
    );
    const hideBubble$ = change$.pipe(
        takeUntil(this.ngUnsubscribe),
        debounceTime(400),
        mapTo(false)
    );

    this.showBubble$ = merge(showBubble$, hideBubble$);
    this.bubbleMessage = 'Added';
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
