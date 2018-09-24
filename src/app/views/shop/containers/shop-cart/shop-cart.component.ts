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
  @Output() private userCounterChangeEmitter: EventEmitter<void>;

  public showBubble$: Observable<boolean>;
  public bubbleMessage: string;
  private ngUnsubscribe: Subject<void>;

  constructor() {
    this.userCounterChangeEmitter = new EventEmitter<void>();
  }

  public ngOnInit(): void {
    this.ngUnsubscribe = new Subject<void>();

    const change$ = this.userCounterChangeEmitter.asObservable();
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

  public userCounterChange(): void {
    this.userCounterChangeEmitter.emit();
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
