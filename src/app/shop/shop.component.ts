import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Observable,
  Subject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  public apparels$: Observable<Apparels>;
  public category: string;
  public categories: string[];
  public loading: boolean;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  constructor(
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
  ) {

  }

  public ngOnInit() {
    this.route.data
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data: { category: string }) => {
          this.loading = this.apparels === undefined;
          this.category = data.category === undefined ? 'all' : data.category;
        });

    this.categories = categories;

    this.apparels$
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((allApparels: Apparels) => {
          this.apparels = allApparels;
          const flattenApparels = Object.values(allApparels).map(apparels => apparels);
          this.apparels.all = [].concat.apply([], flattenApparels);
          this.loading = false;
          this.cdr.detectChanges();
        });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
