import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocklistsComponent } from './stocklists.component';

describe('StocklistsComponent', () => {
  let component: StocklistsComponent;
  let fixture: ComponentFixture<StocklistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocklistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init stocklists component', () => {
    expect(component).toBeTruthy();
  });
});
