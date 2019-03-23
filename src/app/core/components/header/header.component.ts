import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Slices } from 'routeshub';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  pairwise,
  takeUntil
} from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from '+store';
import { Hub, hub } from '-routing/hub';
import { AuthComponent } from '-auth/containers/auth/auth.component';
import { getToggleAnimation } from '-core/shared/animations/toggle.animation';
import { direction, visibility } from '-core/shared/constants';
import { DirectionState, User, VisibilityState } from '-core/shared/interfaces';

const toggleAnimationTrigger = 'toggleHeader';
const toggleAnimation = getToggleAnimation(toggleAnimationTrigger);

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [toggleAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  public hub: Slices<Hub>;
  private user: User;
  private unsubscribe$: Subject<void>;
  private isVisible: BehaviorSubject<boolean>;

  @HostBinding(`@${toggleAnimationTrigger}`)
  public get toggle(): VisibilityState {
    return this.isVisible.value ? visibility.visible : visibility.hidden;
  }

  constructor(
    public router: Router,
    private readonly dialog: MatDialog,
    private readonly store: Store<fromStore.AuthState>
  ) {}

  public ngOnInit(): void {
    this.hub = hub;
    this.isVisible = new BehaviorSubject<boolean>(true);
    this.unsubscribe$ = new Subject<void>();

    this.store
      .select(fromStore.getUser)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: User) => (this.user = user));
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
        switch (directionState) {
          case direction.up:
            this.isVisible.next(true);
            break;
          case direction.down:
            this.isVisible.next(false);
            break;
          default:
            return;
        }
      });
  }

  public auth(): void {
    if (this.user && this.user.catchPhrase) {
      this.router
        .navigate(this.hub.userCenter.id.stateFn({ id: this.user.id }))
        .catch(console.error);

      return;
    }

    this.authPopUp();
  }

  public ngOnDestroy(): void {
    this.isVisible.complete();

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private authPopUp(): void {
    const options = { width: '30%' };
    this.dialog.open(AuthComponent, options);
  }
}
