import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BarComponent } from './bar.component';

describe('BarComponent', () => {
  let component: BarComponent;
  let fixture: ComponentFixture<BarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [BarComponent],
          imports: [RouterTestingModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init bar component', () => {
    expect(component).toBeTruthy();
  });
});
