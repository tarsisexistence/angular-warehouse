import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material';

import {
  Subject,
  fromEvent
} from 'rxjs';
import {
  takeUntil,
  distinctUntilChanged,
  map,
  pairwise,
  debounceTime
} from 'rxjs/operators';

import {
  returnPolicy,
  shippingHandling
} from '$core/shared/constants/shop-rules.constants';
import { InfoComponent } from '#shared/dialogs/info/info.component';
import { Direction } from '$core/shared/enums/direction.enum';
import { VisibilityState } from '$core/shared/enums/visibility-state.enum';
import { getToggleAnimation } from '$core/shared/animations/toggle.animation';

const animationTrigger = 'toggleFooter';
const animation = getToggleAnimation(animationTrigger);

@Component({
  selector: 'shop-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [animation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$: Subject<void>;
  private isVisible: boolean;

  @HostBinding(`@${animationTrigger}`)
  public get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(
      private cdr: ChangeDetectorRef,
      private dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.unsubscribe$ = new Subject<void>();
    this.isVisible = false;
  }

  public ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
        .pipe(
            takeUntil(this.unsubscribe$),
            debounceTime(5),
            map(() => window.pageYOffset),
            pairwise(),
            map(([y1, y2]): Direction => y1 === y2 ? null :
                y1 > y2 ? Direction.Up : Direction.Down),
            distinctUntilChanged()
        )
        .subscribe((direction: Direction) => {
          switch (direction) {
            case Direction.Up:
              this.isVisible = false;
              this.cdr.markForCheck();
              break;
            case Direction.Down:
              this.isVisible = true;
              this.cdr.markForCheck();
              break;
            default:
              return;
          }
        });
  }

  public openShippingHandling(): void {
    this.dialog.open(InfoComponent, {
      height: '500px',
      width: '600px',
      data: shippingHandling
    } as MatDialogConfig<any>);
  }

  public openReturnPolicy(): void {
    this.dialog.open(InfoComponent, {
      height: '500px',
      width: '600px',
      data: returnPolicy
    } as MatDialogConfig<any>);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
