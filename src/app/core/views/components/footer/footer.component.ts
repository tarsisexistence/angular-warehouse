import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { Subject, fromEvent } from 'rxjs';
import {
  takeUntil,
  distinctUntilChanged,
  map,
  pairwise,
  debounceTime
} from 'rxjs/operators';

import { InfoComponent } from '#shared/dialogs/info/info.component';
import { getToggleAnimation } from '$core/shared/animations/toggle.animation';
import {
  direction,
  visibility,
  returnPolicy,
  shippingHandling
} from '$core/shared/constants';
import { DirectionState, VisibilityState } from '$core/shared/interfaces';

const toggleAnimationTrigger = 'toggleFooter';
const toggleAnimation = getToggleAnimation(toggleAnimationTrigger);

@Component({
  selector: 'shop-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [toggleAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$: Subject<void>;
  private isVisible: boolean;

  @HostBinding(`@${toggleAnimationTrigger}`)
  public get toggle(): VisibilityState {
    return this.isVisible ? visibility.visible : visibility.hidden;
  }

  constructor(private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

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
        map(
          ([y1, y2]): DirectionState =>
            y1 === y2 ? null : y1 > y2 ? direction.up : direction.down
        ),
        distinctUntilChanged()
      )
      .subscribe((directionState: DirectionState) => {
        // TODO: refactor
        switch (directionState) {
          case direction.up:
            this.isVisible = false;
            this.cdr.markForCheck();
            break;
          case direction.down:
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
