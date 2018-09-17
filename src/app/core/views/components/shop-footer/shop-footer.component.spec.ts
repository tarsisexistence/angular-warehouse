import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';

import { ShopFooterComponent } from './shop-footer.component';

describe('ShopFooterComponent', () => {

  let component: ShopFooterComponent;
  let fixture: ComponentFixture<ShopFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [ShopFooterComponent],
          imports: [MatDialogModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init shop-footer component', () => {
    expect(component).toBeTruthy();
  });
});
