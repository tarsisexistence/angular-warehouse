import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromStore from '+store';
import * as fromAuth from '+store/reducers';
import { AppComponent } from '~app/app.component';
import { SharedTestingModule } from '#shared/shared.testing.module';
import { HeaderComponent } from '$core/components/header/header.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<fromStore.CartState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
      imports: [
        SharedTestingModule,
        StoreModule.forRoot({
          shop: combineReducers(fromAuth.authReducers)
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
