import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatIconModule } from '@angular/material';

import { ApparelsComponent } from './apparels.component';
import { CartService } from '../../shared/cart.service';

describe('ApparelsComponent', () => {
  let component: ApparelsComponent;
  let fixture: ComponentFixture<ApparelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [ApparelsComponent],
          imports: [MatIconModule],
          providers: [CartService]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init apparels component', () => {
    expect(component).toBeTruthy();
  });
});
