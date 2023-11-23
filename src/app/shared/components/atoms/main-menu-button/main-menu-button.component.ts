import { Component, EventEmitter, Input, Output, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mainmenu-button',
  templateUrl: './main-menu-button.component.html',
  styleUrl: './main-menu-button.component.scss'
})
export class MainMenuButtonComponent {
  @Input() title: string = '';
  @Input() customStyle: { [key: string]: string } = {};
  @Input() buttonType: string = '';
  @Output() buttonClick = new EventEmitter<string>();
  @Input() width: string = 'fit-content';

  @HostBinding('style.width') get getWidth() {
    return this.width;
  }

  handleButtonClick():void {
    this.buttonClick.emit(this.buttonType);
  }

  constructor() {
  }

  get buttonStyle(): { [key: string]: string } {
    return this.customStyle;
  }
}
