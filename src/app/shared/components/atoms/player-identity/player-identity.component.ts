import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../../../core/services/player.service';
import { Player } from '../../../../core/model/player';

@Component({
  selector: 'app-player-identity',
  templateUrl: './player-identity.component.html',
  styleUrl: './player-identity.component.scss'
})
export class PlayerIdentityComponent {
  player: Player | null = null;
  private playerSubscription: Subscription | undefined;
  
  constructor(private playerService: PlayerService) {
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
