import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'shop-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent {
  @Input() public categories: string[];

  public identify(index: number, category: string): number {
    return index;
  }
}
