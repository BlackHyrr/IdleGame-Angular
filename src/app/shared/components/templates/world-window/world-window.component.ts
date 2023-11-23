import { Component } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';

@Component({
  selector: 'app-world-window',
  templateUrl: './world-window.component.html',
  styleUrl: './world-window.component.scss'
})
export class WorldWindowComponent {
  constructor( protected windowStateService: WindowStateService) {
  }
}
