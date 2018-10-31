import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material';

import { combineReducers, Store, StoreModule } from '@ngrx/store';

import * as fromStore from '+store/index';
import * as fromAuth from '+store/reducers';
import { SharedTestingModule } from '#shared/shared.testing.module';
import { AuthComponent } from '-auth/containers/auth/auth.component';
import { SignUpComponent } from '-auth/components/sign-up/sign-up.component';
import { SignInComponent } from '-auth/components/sign-in/sign-in.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let store: Store<fromStore.AuthState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent, SignUpComponent, SignInComponent],
      imports: [
        SharedTestingModule,
        StoreModule.forRoot({
          shop: combineReducers(fromAuth.authReducers)
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
