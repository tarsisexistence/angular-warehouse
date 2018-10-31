import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  AfterViewInit,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Subject, fromEvent } from 'rxjs';
import {
  takeUntil,
  distinctUntilChanged,
  map,
  pairwise,
  debounceTime
} from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from '+store/index';
import { routesEntity, Entity } from '$routes-entity/entity';
import { AuthComponent } from '=auth/containers/auth/auth.component';
import { getToggleAnimation } from '$core/shared/animations/toggle.animation';
import { direction, visibility } from '$core/shared/constants';
import { DirectionState, VisibilityState, User } from '$core/shared/interfaces';

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
  public routes: Entity;
  private user: User;
  private unsubscribe$: Subject<void>;
  private isVisible: boolean;

  @HostBinding(`@${toggleAnimationTrigger}`)
  public get toggle(): VisibilityState {
    return this.isVisible ? visibility.visible : visibility.hidden;
  }

  constructor(
    public router: Router,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private store: Store<fromStore.AuthState>
  ) {}

  public ngOnInit(): void {
    this.routes = routesEntity;
    this.unsubscribe$ = new Subject<void>();
    this.isVisible = true;

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
            this.isVisible = true;
            this.cdr.markForCheck();
            break;
          case direction.down:
            this.isVisible = false;
            this.cdr.markForCheck();
            break;
          default:
            return;
        }
      });
  }

  public auth(): void {
    if (this.user && this.user.catchPhrase) {
      // TODO: ..
      this.router
        .navigate(['user-center', this.user.id])
        .catch((err: Error) => console.error(err));
      return;
    }

    this.authPopUp();
  }

  private authPopUp(): void {
    const options = { width: '30%' };
    this.dialog.open(AuthComponent, options);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
