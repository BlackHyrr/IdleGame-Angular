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
  currentTime: number = 0;
  interval: number = 0;
  
  
  constructor(private playerService: PlayerService, private windowStateService: WindowStateService) {

  }

  toggleWindow(windowId: string): void {
    this.windowStateService.openWindow$.pipe(take(1)).subscribe((currentWindow) => {
      if (currentWindow === windowId) {
        this.windowStateService.closeWindow();
      } else {
        this.windowStateService.openWindow(windowId);
      }
    });
  }

  displayCurrentTime() {
    this.currentTime = Date.now();
  }

  ngOnInit(): void {
    this.playerSubscription = this.playerService.player$.subscribe(player => {
      this.player = player;
    });

    this.displayCurrentTime();
    this.interval = window.setInterval(() => {
      this.displayCurrentTime();
    }, 1000)
  }

  ngOnDestroy(): void {
    this.playerSubscription?.unsubscribe();
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
