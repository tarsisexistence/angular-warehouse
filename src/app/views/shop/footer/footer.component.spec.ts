import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [FooterComponent],
          imports: [MatDialogModule]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should init footer component', () => {
    expect(component).toBeTruthy();
  });
});
