import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-title',
  templateUrl: './window-title.component.html',
  styleUrl: './window-title.component.scss'
})
export class WindowTitleComponent {
  @Input() windowTitle: string = '';
}
