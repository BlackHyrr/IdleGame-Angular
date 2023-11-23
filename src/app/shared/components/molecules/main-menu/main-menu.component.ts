import { Component, OnInit, Input } from '@angular/core';
import { MainMenuService } from '../../../../core/services/main-menu.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent implements OnInit{
  menuVisible$: Observable<boolean> = this.mainMenuService.menuVisible$;
  @Input() buttonType: string = '';
  @Input() size: string = '';

  handleButtonClick(buttonType: string): void {
    switch (buttonType) {
      case 'main-menu':
        this.mainMenuService.toggleMainMenu();
        break;
      case 'resume':
        this.mainMenuService.toggleMainMenu();
        break
      case 'save':
        break;
      case 'load':
        break;
      case 'options':
        break;
      case 'quit':
        this.mainMenuService.toggleMainMenu();
        break;
      default:
        throw new Error(`This button is invalid. Check the buttonType attribute for the components.`)
    }
  }

  constructor(private mainMenuService: MainMenuService) {}

  ngOnInit(): void {
    this.menuVisible$ = this.mainMenuService.menuVisible$;
  }
}
