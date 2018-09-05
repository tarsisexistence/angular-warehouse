import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import {
  combineReducers,
  Store,
  StoreModule
} from '@ngrx/store';
import * as fromStore from '@core/store';
import * as fromAuth from '@store/reducers';

import { MaterialModule } from '@material/material.module';
import { AuthComponent } from '@auth/auth.component';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';
import { SignInComponent } from '@auth/sign-in/sign-in.component';

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
        ReactiveFormsModule,
        MaterialModule,
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
