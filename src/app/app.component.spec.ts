import {
  TestBed,
  async,
  ComponentFixture
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  combineReducers,
  Store,
  StoreModule
} from '@ngrx/store';

import * as fromStore from '+store/index';
import * as fromAuth from '+store/reducers';
import { AppComponent } from '!app/app.component';
import { SharedModule } from '#shared/shared.module';
import { HeaderComponent } from '$core/views/components/header/header.component';

// TODO: create shared testing module
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<fromStore.CartState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot({
          shop: combineReducers(fromAuth.reducers)
        })
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
