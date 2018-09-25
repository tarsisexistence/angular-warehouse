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
  public category: string;
  public categories: string[];
  public loading: boolean;
  private ngUnsubscribe: Subject<boolean>;

  constructor(
      private cdr: ChangeDetectorRef,
      private route: ActivatedRoute,
      private router: Router,
      private store: Store<fromStore.ShopState>
  ) {
  }

  public ngOnInit(): void {
    this.ngUnsubscribe = new Subject<boolean>();

    this.categories = categories;

    this.route.data
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: { category: string }) => {
          this.loading = this.apparels === undefined;
          this.category = data.category === undefined ? 'all' : data.category;
        });

    this.store.dispatch(new fromStore.LoadApparel());
    this.store.select(fromStore.getShopApparel)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((apparels: Apparel[]) => {
          this.apparels = new Apparels(apparels);

          this.loading = false;
          this.cdr.markForCheck();
        });

    this.router.events
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
            this.apparels.all = mixArray<Apparel>(this.apparels.all);
            this.cdr.markForCheck();
          }
        });
  }

  public addToCart(apparel: Apparel): void {
    this.store.dispatch(new fromStore.AddApparel(apparel));
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
