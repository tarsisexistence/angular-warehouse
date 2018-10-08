import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router
} from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from '+store/index';
import { shop as shopRoutesEntity } from '$routes-entity/entities';
import { RSEntity } from '$routes-entity/interfaces';
import { ShopRoutes } from '$routes-entity/routes';
import { Apparel } from '-shop/shared/interfaces/apparel.interface';
import { Apparels } from '-shop/shared/models/apparels.model';
import { categories } from '-shop/shared/models/categories.model';
import { mixArray } from '-shop/shared/functions/mix-array.function';

@Component({
  selector: 'shop-feat',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit, OnDestroy {
  public apparels: Apparels;
  public selectedCategory: string;
  public categories: string[];
  public loading: boolean;
  public shopRoutesEntity: RSEntity<ShopRoutes>;
  private unsubscribe$: Subject<boolean>;

  constructor(
      private cdr: ChangeDetectorRef,
      private route: ActivatedRoute,
      private router: Router,
      private store: Store<fromStore.ShopState>
  ) {
  }

  public ngOnInit(): void {
    this.unsubscribe$ = new Subject<boolean>();
    this.shopRoutesEntity = shopRoutesEntity;
    this.categories = categories;

    this.route.data
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((data: { category: string }) => {
          this.loading = this.apparels === undefined;
          this.selectedCategory = data.category === undefined ? 'all' : data.category;
        });

    this.store.dispatch(new fromStore.LoadApparel());
    this.store.select(fromStore.getShopApparel)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((apparels: Apparel[]) => {
          this.apparels = new Apparels(apparels);
          this.loading = false;
          this.cdr.markForCheck();
        });

    this.router.events
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
            const apparel = this.apparels[this.selectedCategory];

            if (apparel === undefined) {
              return;
            }

            this.apparels[this.selectedCategory] = mixArray<Apparel>(apparel);
            this.cdr.markForCheck();
          }
        });
  }

  public addToCart(apparel: Apparel): void {
    this.store.dispatch(new fromStore.AddApparel(apparel));
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
