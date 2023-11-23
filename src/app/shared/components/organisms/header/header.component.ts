import { Component, EventEmitter, Output  } from '@angular/core';
import { MainMenuService } from '../../../../core/services/main-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  handleMainMenuButtonClick(): void {
    this.mainMenuService.toggleMainMenu();
  }

  constructor(private mainMenuService: MainMenuService) {
    
  }
}
