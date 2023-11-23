import { Component } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';

@Component({
  selector: 'app-character-window',
  templateUrl: './character-window.component.html',
  styleUrl: './character-window.component.scss'
})
export class CharacterWindowComponent {
  constructor( protected windowStateService: WindowStateService) {
  }
}
