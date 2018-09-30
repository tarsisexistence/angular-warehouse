import {
  Component,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';

import {
  Entity,
  routesEntity
} from '$routes-entity/entity';

@Component({
  selector: 'home-action',
  templateUrl: './home-action.component.html',
  styleUrls: ['./home-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeActionComponent implements OnInit {
  public routes: Entity;

  public ngOnInit(): void {
    this.routes = routesEntity;
  }
}
