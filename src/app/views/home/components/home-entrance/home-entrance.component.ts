import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'home-entrance',
  templateUrl: './home-entrance.component.html',
  styleUrls: ['./home-entrance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeEntranceComponent {
}
