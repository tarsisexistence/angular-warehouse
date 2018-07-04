import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EntranceComponent } from './entrance.component';

describe('EntranceComponent', () => {
	let component: EntranceComponent;
	let fixture: ComponentFixture<EntranceComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EntranceComponent],
      imports: [RouterTestingModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EntranceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should init entrance component', () => {
		expect(component).toBeTruthy();
	});
});
