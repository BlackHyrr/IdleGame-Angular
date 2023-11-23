import { Component } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';

@Component({
  selector: 'app-region-window',
  templateUrl: './region-window.component.html',
  styleUrl: './region-window.component.scss'
})
export class RegionWindowComponent {
  constructor( protected windowStateService: WindowStateService) {
  }
}
