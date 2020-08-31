import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { merge, Observable, Subject } from 'rxjs';
import { debounceTime, mapTo, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopCartComponent implements OnInit, OnDestroy {
  @Input() public totalCounter: number;

  public showBubble$: Observable<boolean>;
  public bubbleMessage: string;
  @Output() private readonly userCounterChangeEmitter: EventEmitter<void>;
  private unsubscribe$: Subject<void>;

  constructor() {
    this.userCounterChangeEmitter = new EventEmitter<void>();
  }

  public ngOnInit(): void {
    this.unsubscribe$ = new Subject<void>();

    const change$ = this.userCounterChangeEmitter.asObservable();
    const showBubble$ = change$.pipe(takeUntil(this.unsubscribe$), mapTo(true));
    const hideBubble$ = change$.pipe(takeUntil(this.unsubscribe$), debounceTime(400), mapTo(false));

    this.showBubble$ = merge(showBubble$, hideBubble$);
    this.bubbleMessage = 'Added';
  }

  public userCounterChange(): void {
    this.userCounterChangeEmitter.emit();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
