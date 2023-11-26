import { Component, Input } from '@angular/core';
import { Item } from '../../../../core/model/item';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() item: Item | null = null;
}
