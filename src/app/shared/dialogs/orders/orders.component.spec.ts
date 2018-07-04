import {
	async,
	ComponentFixture,
	TestBed
} from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('ShippingHandlingComponent', () => {
	let component: OrdersComponent;
	let fixture: ComponentFixture<OrdersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [OrdersComponent],
          providers: [
            { provide: MAT_DIALOG_DATA, useValue: {} }
          ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(OrdersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should init dialog orders component', () => {
		expect(component).toBeTruthy();
	});
});
