import { Component } from '@angular/core';
import { Player } from '../../../../core/model/player';
import { PlayerService } from '../../../../core/services/player.service';
import { Subscription, take } from 'rxjs';
import { WindowStateService } from '../../../../core/services/window-state.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent {

  player: Player | null = null;
  private playerSubscription: Subscription | undefined;
  
  constructor(private playerService: PlayerService, private windowStateService: WindowStateService) {}

  toggleWindow(windowId: string): void {
    this.windowStateService.openWindow$.pipe(take(1)).subscribe((currentWindow) => {
      if (currentWindow === windowId) {
        this.windowStateService.closeWindow();
      } else {
        this.windowStateService.openWindow(windowId);
      }
    });
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
