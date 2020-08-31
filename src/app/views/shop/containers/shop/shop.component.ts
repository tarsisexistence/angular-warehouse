import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from 'store';
import { Apparel } from 'shop/shared/interfaces/apparel.interface';
import { Apparels } from 'shop/shared/models/apparels.model';
import { categories } from 'shop/shared/const/categories.const';
import { mixArray } from 'shop/shared/utils/mix-array.function';
import { Category } from 'shop/shared/interfaces/category.interface';

@Component({
  selector: 'shop-feat',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent implements OnInit, OnDestroy {
  public apparels: BehaviorSubject<Apparels>;
  public selectedCategory: string;
  public categories: Category[];
  public loading: boolean;
  private unsubscribe$: Subject<boolean>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store<fromStore.ShopState>
  ) {}

  public ngOnInit(): void {
    this.apparels = new BehaviorSubject<Apparels>(null);
    this.unsubscribe$ = new Subject<boolean>();
    this.categories = categories;

    this.route.data.pipe(takeUntil(this.unsubscribe$)).subscribe((data: { category: string }) => {
      this.loading = this.apparels.getValue() === null;
      this.selectedCategory = data.category === undefined ? 'all' : data.category;
    });

    this.store.dispatch(new fromStore.LoadApparel());

    this.store
      .select(fromStore.getShopApparel)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((allApparel: Apparel[]) => {
        const apparels = new Apparels(allApparel);
        this.apparels.next(apparels);
        this.loading = false;
      });

    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        const apparels: Apparels = this.apparels.getValue();
        const apparel = apparels[this.selectedCategory];

        if (apparel === undefined) {
          return;
        }

        const mixedApparel = mixArray<Apparel>(apparel);
        const updatedApparels = {
          ...apparels,
          [this.selectedCategory]: mixedApparel
        } as Apparels;

        this.apparels.next(updatedApparels);
      }
    });
  }

  public addToCart(apparel: Apparel): void {
    this.store.dispatch(new fromStore.AddApparel(apparel));
  }

  public ngOnDestroy(): void {
    this.apparels.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
