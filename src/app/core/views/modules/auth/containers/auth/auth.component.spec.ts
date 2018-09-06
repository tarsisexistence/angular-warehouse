import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material';

import {
  combineReducers,
  Store,
  StoreModule
} from '@ngrx/store';
import * as fromStore from '@core/store';
import * as fromAuth from '@store/reducers';

import { SharedModule } from '@shared/shared.module';
import { AuthComponent } from '@auth/containers/auth/auth.component';
import { SignUpComponent } from '@auth/components/sign-up/sign-up.component';
import { SignInComponent } from '@auth/components/sign-in/sign-in.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let store: Store<fromStore.AuthState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
        SignUpComponent,
        SignInComponent
      ],
      imports: [
        NoopAnimationsModule,
        SharedModule,
        StoreModule.forRoot({
          shop: combineReducers(fromAuth.reducers)
        })
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    });

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
