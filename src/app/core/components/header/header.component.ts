import { AfterViewInit, ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { forwardParams, getRegisteredUnits, Units } from 'routeshub';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pairwise, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
// import { getRoutes } from '@routerkit/core';
// import { TypedRoutes } from '../../../../../angular-warehouse.routes';

import * as fromStore from 'store';
import { AuthComponent } from 'auth/containers/auth/auth.component';
import { getToggleAnimation } from 'core/shared/animations/toggle.animation';
import { direction, visibility } from 'core/shared/constants';
import { DirectionState, User, VisibilityState } from 'core/shared/interfaces';
import { Hub } from 'hub/routing.hub';

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
  public hub: Units<Hub>;
  // public routes: TypedRoutes = getRoutes<TypedRoutes>();
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
    this.hub = getRegisteredUnits<Hub>();
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
        map(([y1, y2]): DirectionState => (y1 === y2 ? null : y1 > y2 ? direction.up : direction.down)),
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
      const state = forwardParams(this.hub.userCenter.id.state, {
        id: this.user.id
      });
      this.router.navigate(state).catch(console.error);

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
