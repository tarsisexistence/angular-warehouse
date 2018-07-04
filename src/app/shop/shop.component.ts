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
import { ApparelService } from '../apollo/services/apparel.service';

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
      private apparelService: ApparelService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
  ) {

  }

  public ngOnInit() {
    this.apparels$ = this.apparelService.getAllApparel('');
    this.apparels$.subscribe(data => console.log(data));
    // this.route.data
    //     .pipe(takeUntil(this.ngUnsubscribe))
    //     .subscribe((data: { category: string }) => {
    //       this.loading = this.apparels === undefined;
    //       this.category = data.category === undefined ? 'all' : data.category;
    //     });
    //
    // this.categories = categories;
    //
    // this.apparels$
    //     .pipe(takeUntil(this.ngUnsubscribe))
    //     .subscribe((allApparels: Apparels) => {
    //       this.apparels = allApparels;
    //       const flattenApparels = Object.values(allApparels).map(apparels => apparels);
    //       this.apparels.all = [].concat.apply([], flattenApparels);
    //       this.loading = false;
    //       this.cdr.detectChanges();
    //     });
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
