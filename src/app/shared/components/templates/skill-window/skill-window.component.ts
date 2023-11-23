import { Component } from '@angular/core';
import { WindowStateService } from '../../../../core/services/window-state.service';

@Component({
  selector: 'app-skill-window',
  templateUrl: './skill-window.component.html',
  styleUrl: './skill-window.component.scss'
})
export class SkillWindowComponent {
  constructor( protected windowStateService: WindowStateService) {
  }
}
