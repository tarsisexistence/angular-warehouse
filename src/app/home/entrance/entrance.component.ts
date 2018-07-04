import {
	ChangeDetectionStrategy,
	Component
} from '@angular/core';

@Component({
	selector: 'home-entrance',
	templateUrl: './entrance.component.html',
	styleUrls: ['./entrance.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntranceComponent {
}
