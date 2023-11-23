import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-resource',
  templateUrl: './player-resource.component.html',
  styleUrl: './player-resource.component.scss'
})
export class PlayerResourceComponent {
  @Input() resourceName: string = '';
  @Input() resourceValueCurrent: number = 0;
  @Input() resourceValueMax: number = 0;
  @Input() resourceCssId: string = '';
}
