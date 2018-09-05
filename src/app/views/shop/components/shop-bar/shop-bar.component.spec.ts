import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShopBarComponent } from './shop-bar.component';

describe('ShopBarComponent', () => {
  let component: ShopBarComponent;
  let fixture: ComponentFixture<ShopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [ShopBarComponent],
          imports: [RouterTestingModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init shop-bar component', () => {
    expect(component).toBeTruthy();
  });
});
