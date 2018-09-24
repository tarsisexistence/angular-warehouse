import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  combineReducers,
  Store,
  StoreModule
} from '@ngrx/store';

import * as fromStore from '+store/index';
import * as fromAuth from '+store/reducers';
import { SharedTestingModule } from '#shared/shared.testing.module';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Store<fromStore.AuthState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule,
        SharedTestingModule,
        StoreModule.forRoot({
          auth: combineReducers(fromAuth.authReducers)
        })
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    fixture.detectChanges();
  });

  it('should init header component', () => {
    expect(component).toBeTruthy();
  });
});
