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
import { Store } from '@ngrx/store';

import * as fromStore from '+store/index';
import {
  routesEntity,
  Entity
} from '$routes-entity/entity';
import { AuthComponent } from '$auth/containers/auth/auth.component';
import { User } from '$core/shared/interfaces/user.interface';
import { Direction } from '$core/shared/enums/direction.enum';
import { VisibilityState } from '$core/shared/enums/visibility-state.enum';
import { getToggleAnimation } from '$core/shared/animations/toggle.animation';

const animationTrigger = 'toggleHeader';
const animation = getToggleAnimation(animationTrigger);

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [animation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  public routes: Entity;
  private user: User;
  private ngUnsubscribe: Subject<void>;
  private isVisible: boolean;

  @HostBinding(`@${animationTrigger}`)
  public get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(
      public router: Router,
      private cdr: ChangeDetectorRef,
      private dialog: MatDialog,
      private store: Store<fromStore.AuthState>
  ) {
  }

  public ngOnInit(): void {
    this.routes = routesEntity;
    this.ngUnsubscribe = new Subject<void>();
    this.isVisible = true;

    this.store.select(fromStore.getUser)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((user: User) => this.user = user);
  }

  public ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
        .pipe(
            takeUntil(this.ngUnsubscribe),
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
              this.isVisible = true;
              this.cdr.markForCheck();
              break;
            case Direction.Down:
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
      this.router.navigate(['user-center', this.user.id])
          .catch((err: Error) => console.error(err));
      return;
    }

    this.authPopUp();
  }

  private authPopUp(): void {
    this.dialog.open(AuthComponent, { width: '30%' });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
