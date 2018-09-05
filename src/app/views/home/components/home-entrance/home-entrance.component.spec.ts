import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeEntranceComponent } from './home-entrance.component';

describe('HomeEntranceComponent', () => {
  let component: HomeEntranceComponent;
  let fixture: ComponentFixture<HomeEntranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEntranceComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
