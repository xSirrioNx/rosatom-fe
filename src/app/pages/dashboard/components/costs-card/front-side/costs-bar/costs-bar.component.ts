import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-traffic-bar',
  styleUrls: ['./costs-bar.component.scss'],
  templateUrl: './costs-bar.component.html',
})
export class CostsBarComponent {

  @Input() barData: { prevDate: string; prevValue: number; nextDate: string; nextValue: number };
  @Input() successDelta: boolean;
}
