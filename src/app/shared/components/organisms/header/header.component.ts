import { Component } from '@angular/core';
import { MainMenuService } from '../../../../core/services/main-menu.service';
import { Player } from '../../../../core/model/player';
import { PlayerService } from '../../../../core/services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  player: Player | null = null;
  private playerSubscription: Subscription | undefined;

  constructor(private mainMenuService: MainMenuService, private playerService: PlayerService) {
    
  }

  handleMainMenuButtonClick(): void {
    this.mainMenuService.toggleMainMenu();
  }

  ngOnInit(): void {
    this.playerSubscription = this.playerService.player$.subscribe(player => {
      this.player = player;
    });
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
  }
}
