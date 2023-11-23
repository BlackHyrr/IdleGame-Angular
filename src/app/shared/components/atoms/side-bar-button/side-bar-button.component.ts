import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-button',
  templateUrl: './side-bar-button.component.html',
  styleUrl: './side-bar-button.component.scss'
})
export class SideBarButtonComponent {
  @Input() buttonTitle: string = '';
}
