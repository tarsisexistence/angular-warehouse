import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromStore from '../shared/store';

import { Apparel } from './shared/apparel.interface';
import { Apparels } from './shared/apparels.interface';
import { categories } from './shared/apparels.constants';

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
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef,
      private store: Store<fromStore.ShopState>
  ) {
  }

  public ngOnInit() {
    this.apparels = new Apparels();
    this.categories = categories;

    this.route.data
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: { category: string }) => {
          this.loading = this.apparels === undefined;
          this.category = data.category === undefined ? 'all' : data.category;
        });

    this.store.select(fromStore.getAllApparel)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((apparels: Apparel[]) => {
          console.log(apparels);
          this.apparels.all = apparels;

          this.apparels.all.forEach((apparel: Apparel) => {
            this.apparels[apparel.type].push(apparel);
          });

          this.loading = false;
          this.cdr.detectChanges();
        });
    this.store.dispatch(new fromStore.LoadApparel());

  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
