import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [InfoComponent],
          providers: [
            {
              provide: MAT_DIALOG_DATA,
              useValue: {}
            }
          ]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
