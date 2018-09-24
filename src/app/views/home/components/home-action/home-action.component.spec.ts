import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActionComponent } from './home-action.component';

describe('HomeActionComponent', () => {
  let component: HomeActionComponent;
  let fixture: ComponentFixture<HomeActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
